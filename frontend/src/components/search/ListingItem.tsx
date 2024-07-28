import { Button, Divider, Rating } from "@mui/material";
import NorthEastOutlinedIcon from '@mui/icons-material/NorthEastOutlined';

export interface IListingItem {
    id: number;
    title: string;
    cityName: string;
    categoryName: string;
    duration: number;
    freeCancellation: boolean;
    rating: number;
    reviews: number;
    price: number;
    image: string;
}

export interface ListingProps {
    listing: IListingItem;
}


const ListingItem = (props: ListingProps) => {
    const { listing } = props;
    return (
        <>
            <div className="flex my-8 flex-col md:flex-row">
                <div className="md:basis-4/12 md:max-w-[250px]">
                    <img
                        className="w-full h-full object-cover rounded-lg"
                        src={listing.image}
                        alt="placeholder"
                    />
                </div>
                <div className="basis-6/12 grow md:px-4 md:pl-8">
                    <div>
                        <div className="text-xs text-gray">
                            <span>{listing.duration}+ hours</span>
                            <span className="mx-3">•</span>
                            <span>{listing.categoryName}</span>
                        </div>
                    </div>
                    <div className="font-medium text-lg">{listing.title}</div>
                    <div className="text-sm text-gray">
                        {listing.cityName}
                    </div>
                    {listing.freeCancellation && <div className="py-6 text-sm font-medium text-success">
                        Free cancellation
                    </div>}
                </div>
                <div className="basis-2/12 md:text-end flex flex-col justify-between">
                    <div>
                        <Rating size="small" name="read-only" value={listing.rating} readOnly />
                        <div className="text-sm text-gray">{listing.reviews} reviews</div>
                    </div>
                    <div>
                        <div className="mb-6">
                            <div className="text-sm text-gray">From</div>
                            <div className="text-2xl font-medium">CA${listing.price}</div>
                            <div className="text-sm text-gray">per adult</div>
                        </div>
                        <div>
                            <Button variant="contained" color="primary">
                                {" "}
                                View Detail
                                <span className="ml-2"><NorthEastOutlinedIcon /></span>
                            </Button>
                        </div>
                    </div>
                </div>

            </div>
            <Divider />
        </>
    );
};

export default ListingItem;
