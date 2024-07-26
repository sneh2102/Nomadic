export interface Tour {
    id: number;
    name: string;
    location: string;
    city: string;
    price: number;
    image: string;
}

export interface TourMetaData {
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
}

export interface TourList {
    data: Tour[];
    meta: TourMetaData;
}