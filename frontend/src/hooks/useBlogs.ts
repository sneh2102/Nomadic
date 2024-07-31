// useBlogs.ts
import { getBlogs } from "../services/blogServie";
import { useQuery } from "@tanstack/react-query";

const useBlog = ({
    page,
    category,
}: {
    page: string | null;
    category: string | null;
}) => {
    const blogQuery = useQuery({
        queryKey: ["blogs", page, category],
        queryFn: async () => {
            return await getBlogs({
                page,
                category,
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
