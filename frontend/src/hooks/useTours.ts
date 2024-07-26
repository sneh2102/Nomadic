import { useQuery } from "@tanstack/react-query"
import { getTours } from "../services/tourService";
import { TourList } from "../interfaces/tour.interface";

export const useTours = () => {
    const tourQuery = useQuery<TourList>({
        queryKey: ["tours"],
        queryFn: async () => {
            try {
                const response = await getTours();
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