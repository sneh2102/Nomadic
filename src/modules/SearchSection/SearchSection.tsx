import { Button, Input } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';

const SearchSection = () => {
    return (
        <div className="bg-light-gray py-4 pb-8">
            <div className="container mx-auto">
                <h1 className="text-3xl font-medium text-center pt-8 mb-8">
                    Tours in Halifax
                </h1>
                <div className="my-2 p-4 bg-white flex flex-col lg:flex-row rounded-lg">
                    <div className="flex mt-4 lg:mt-0 lg:ml-4 basis-8/12">
                        <LocationOnOutlinedIcon className="text-gray" />
                        <div className="ml-2 grow">
                            <div className="text-sm font-medium">Location</div>
                            <Input className="border-b-0" fullWidth placeholder="Where are you going?" />
                        </div>
                        <div className="ml-4 border-l border-gray-border"></div>
                    </div>
                    <div className="flex mt-4 lg:mt-0 lg:ml-4 basis-3/12">
                        <CalendarMonthOutlinedIcon className="text-gray" />
                        <div className="ml-2 grow">
                            <div className="text-sm font-medium">Check in - Check out</div>
                            <Input fullWidth placeholder="When are you going?" />
                        </div>
                        <div className="ml-4 border-l border-gray-border"></div>
                    </div>
                    <div className="basis-1/12 mt-4 lg:mt-0">
                        <Button variant="contained" color="primary" className="w-full h-full">Search</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchSection;
