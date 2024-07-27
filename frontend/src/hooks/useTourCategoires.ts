import { useQuery } from "@tanstack/react-query"
import { TourCategoryList } from "../interfaces/tourCategory.interface";
import { getAllTourCategories } from "../services/tourCategoryService";

export const useTourCategories = () => {
    const tourCategoryQuery = useQuery<TourCategoryList>({
        queryKey: ["tourCategories"],
        queryFn: async () => {
            try {
                const response = await getAllTourCategories();
                if(response instanceof Error) {
                    throw new Error(response.message);
                }
                return response;
            }catch (error: any) {
                throw new Error(error);
            };
        }
    });
    const initialTourCategoriesDict: { [key: string]: string } = {};
    const toursCategoryDict: { [key: string]: string } = tourCategoryQuery.data?.data?.reduce((acc, category) => {
        acc[category.id] = category.name;
        return acc;
    }, initialTourCategoriesDict) || {};
    return {
        tourCategories: tourCategoryQuery.data,
        tourCategoriesLoading: tourCategoryQuery.isLoading,
        tourCategoriesError: tourCategoryQuery.error,
        toursCategoryDict,
    }
}