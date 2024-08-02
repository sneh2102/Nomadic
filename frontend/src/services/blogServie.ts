// Author: Heli Desai
export const getBlogs = async ({
    page,
    category,
    pageSize
}: {
    page: string | null;
    category: string | null;
    pageSize: number;
}) => {
    let q = page ? `?page=${page}` : "";
    q += pageSize ? `${q ? "&" : "?"}limit=${pageSize}` : "";
    q += category ? `${q ? "&" : "?"}category=${category}` : "";
    const url = `${import.meta.env.VITE_BASE_API_URL}/api/v1/blog${q}`;
    console.log("Fetching from URL:", url);
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Fetching blog failed:", error);
        throw error;
    }
};

export const getBlogCategories = async () => {
    const url = `${import.meta.env.VITE_BASE_API_URL}/api/v1/blog-categories`;
    console.log("Fetching from URL:", url);
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Fetching blog categories failed:", error);
        throw error;
    }
};

export const getBlogById = async (id: string) => {
    const url = `${import.meta.env.VITE_BASE_API_URL}/api/v1/blog/${id}`;
    console.log("Fetching blog by ID from URL:", url);
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Fetching blog by ID failed:", error);
        throw error;
    }
};

export const updateBlog = async (id: string, data: any) => {
    const url = `${import.meta.env.VITE_BASE_API_URL}/api/v1/blog/${id}`;
    console.log("Updating blog by ID from URL:", url);
    try {
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Updating blog by ID failed:", error);
        throw error;
    }
};

export const deleteBlog = async (id: string) => {
    const url = `${import.meta.env.VITE_BASE_API_URL}/api/v1/blog/${id}`;
    console.log("Deleting blog by ID from URL:", url);
    try {
        const response = await fetch(url, {
            method: "DELETE",
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Deleting blog by ID failed:", error);
        throw error;
    }
};
