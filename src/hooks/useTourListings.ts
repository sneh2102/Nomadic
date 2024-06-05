import { useQuery } from "@tanstack/react-query";
import { getTourListings } from "../services/tourListingService";

export const useTourListings = () => {
    const query = useQuery({
        queryKey: ["tourListings"],
        queryFn: async () => {
            const response = await getTourListings();
            return response;
        }
    });

    return {
        tourListings: query.data,
        isLoading: query.isLoading
    }
}