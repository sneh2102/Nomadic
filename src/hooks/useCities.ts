import { useQuery } from "@tanstack/react-query"
import { getCities } from "../services/cityService"

export const useCities = () => {
    const query = useQuery({
        queryKey: ["cities"],
        queryFn: async () => {
            const response = await getCities();
            return response;
        }
    });

    const citiesDict: any = query.data?.reduce((acc: any, city: any) => {
        acc[city.id] = city.name;
        return acc;
    }, {}) || {};

    return {
        cities: query.data,
        citiesDict,
        isLoading: query.isLoading
    }
}