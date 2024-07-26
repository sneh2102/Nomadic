import { TourList } from "../interfaces/tour.interface";

export const getTours = async () => {
  try {
    const response = await fetch('http://localhost:8000/api/v1/tours');
    if (!response.ok) {
      throw new Error('Failed to fetch');
    }
    const data: TourList = await response.json();
    return data;
  }catch (error: any) {
    return new Error(error.error);
  }
}