import { useQuery } from "@tanstack/react-query"
import { getTours } from "../services/tourService";
import { TourList } from "../interfaces/tour.interface";

interface UseTours {
    categories: string | null;
}

export const useTours = (props: UseTours) => {
    const tourQuery = useQuery<TourList>({
        queryKey: ["tours", props.categories],
        queryFn: async () => {
            try {
                const response = await getTours({
                    categories: props.categories
                });
                if(response instanceof Error) {
                    throw new Error(response.message);
                }
                return response;
            }catch (error: any) {
                throw new Error(error);
            };
        }
    });
    return {
        tours: tourQuery.data,
        toursLoading: tourQuery.isLoading,
        toursError: tourQuery.error
    }
}