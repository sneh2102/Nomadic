import { Button, Divider, Rating } from "@mui/material";
import NorthEastOutlinedIcon from '@mui/icons-material/NorthEastOutlined';

const ListingItem = () => {
    return (
        <>
        <div className="flex my-8 flex-col md:flex-row">
            <div className="md:basis-4/12 md:max-w-[250px]">
                <img
                    className="w-full h-full object-cover rounded-lg"
                    src="https://picsum.photos/150"
                    alt="placeholder"
                />
            </div>
            <div className="basis-6/12 grow md:px-4 md:pl-8">
                <div>
                    <div className="text-xs text-gray">
                        <span>16+ hours</span>
                        <span className="mx-3">•</span>
                        <span>Full-day Tours</span>
                    </div>
                </div>
                <div className="font-medium text-lg">
                    Stonehenge, Windsor Castle and Bath with Pub Lunch in Lacock
                    London with Guided Cathedral Tour
                </div>
                <div className="text-sm text-gray">
                    Westminster Borough, London
                </div>
                <div className="py-6 text-sm font-medium text-success">
                    Free cancellation
                </div>
            </div>
            <div className="basis-2/12 md:text-end flex flex-col justify-between">
                <div>
                    <Rating size="small" name="read-only" value={5} readOnly />
                    <div className="text-sm text-gray">3014 reviews</div>
                </div>
                <div>
                    <div className="mb-6">
                        <div className="text-sm text-gray">From</div>
                        <div className="text-2xl font-medium">CA$72</div>
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
