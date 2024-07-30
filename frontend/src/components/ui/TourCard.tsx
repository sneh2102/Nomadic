// author: Smit Patel
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

interface TourCardProps {
    name: string;
    location: string;
    city: string;
    rating: number;
    reviews: number;
    price: number;
    image: string;
    tourId: number;
}
const TourCard = (props: TourCardProps) => {
    return (
        <div className="rounded-lg w-full max-w-80 mx-auto">
            <div className="w-full h-80 rounded-lg overflow-hidden">
                <img
                    className="h-full w-full object-cover"
                    src={props.image}
                    alt={props.name}
                />
            </div>
            <h4 className="text-xl font-medium tracking-tighter my-2">
                {props.name}
            </h4>
            <p className="text-grey text-sm mb-4">{props.location}, {props.city}</p>
            <div className="flex items-center">
                <div className="w-8 h-8 bg-primary text-white font-bold flex items-center justify-center rounded-md">
                    {props.rating}
                </div>
                <div className="ml-2 font-medium tracking-tighter text-sm">
                    Exceptional
                </div>
                <div className="text-grey text-sm ml-4">
                    {props.reviews} reviews
                </div>
            </div>
            <div className="my-2 font-medium tracking-tight">
                Starting from{" "}
                <span className="font-bold text-primary">CA${props.price}</span>
            </div>
            <Button
                component={Link}
                to={`/tour/${props.tourId}`}
                variant="contained"
                className="w-full"
            >Explore</Button>
        </div>
    );
};

export default TourCard;
