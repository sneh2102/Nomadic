import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../services/categoryService";

export const useCategories = () => {
    const query = useQuery({
        queryKey: ["categories"],
        queryFn: async () => {
            const response = await getCategories();
            return response;
        }
    });

    const categoriesDict = query.data?.reduce((acc: any, category: any) => {
        acc[category.id] = category.name;
        return acc;
    }, {}) || {};

    return {
        categories: query.data,
        categoriesDict,
        isLoading: query.isLoading
    }
}