export interface Tour {
    id: number;
    name: string;
    location: string;
    city: string;
    price: number;
    image: string;
    freeCancelationAvailable: boolean;
    tourCategoryId: number;
    createdAt: string;
    updatedAt: string;
}

export interface TourMetaData {
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
    freeCancelationAvailableCount: number;
}

export interface TourList {
    data: Tour[];
    meta: TourMetaData;
}