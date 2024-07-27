import { TourList } from "../interfaces/tour.interface";

export const getTours = async ({
  categories,
}: {
  categories: string | null;
}) => {
  try {
    const query = categories ? `?categories=${categories}` : '';
    const response = await fetch(`${import.meta.env.VITE_BASE_API_URL}/api/v1/tours${query}`);
    if (!response.ok) {
      throw new Error('Failed to fetch');
    }
    const data: TourList = await response.json();
    return data;
  }catch (error: any) {
    return new Error(error.error);
  }
}