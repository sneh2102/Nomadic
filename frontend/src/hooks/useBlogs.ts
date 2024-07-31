// Author: Heli Desai
import { getBlogs } from "../services/blogServie";
import { useQuery } from "@tanstack/react-query";

const useBlog = ({
    page,
    category,
    pageSize = 6,
}: {
    page: string | null;
    category: string | null;
    pageSize?: number;
}) => {
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

    return {
        blogs: blogQuery.data,
        blogsLoading: blogQuery.isLoading,
        blogsError: blogQuery.error,
    };
};

export default useBlog;
