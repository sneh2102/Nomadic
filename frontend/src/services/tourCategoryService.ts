export const getAllTourCategories = async () => {
    try {
        const response = await fetch('http://localhost:8000/api/v1/tour-categories');
        if (!response.ok) {
        throw new Error('Failed to fetch');
        }
        const data = await response.json();
        return data;
    } catch (error: any) {
        return new Error(error.error);
    }
}