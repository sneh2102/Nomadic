export const getAllTourCategories = async () => {
    try {
        const response = await fetch(`${import.meta.env.VITE_BASE_API_URL}/api/v1/tour-categories`);
        if (!response.ok) {
        throw new Error('Failed to fetch');
        }
        const data = await response.json();
        return data;
    } catch (error: any) {
        return new Error(error.error);
    }
}