// Author: Heli Desai
import { addBlog, getBlogs } from "../services/blogServie";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const useBlog = ({
    page,
    category,
    pageSize = 6,
}: {
    page: string | null;
    category: string | null;
    pageSize?: number;
}) => {
    const queryClient = useQueryClient();
    const blogQuery = useQuery({
        queryKey: ["blogs", page, category],
        queryFn: async () => {
            return await getBlogs({
                page,
                category,
                pageSize,
            });
        },
    });

    const addBlogMutation = useMutation({
        mutationFn: async (data: {
            title: string;
            content: string;
            category: string;
            description: string;
            thumbnail: string;
            userId: number;
        }) => {
            await addBlog(data);
        },
        onSettled: () => {
            queryClient.invalidateQueries({
                exact: false,
                queryKey: ["blogs"],
            });
            blogQuery.refetch();
        }
    });

    return {
        blogs: blogQuery.data,
        blogsLoading: blogQuery.isLoading,
        blogsError: blogQuery.error,
        addBlogMutation,
    };
};

export default useBlog;
