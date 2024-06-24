import { Button } from "@mui/material";

const ExploreCard = () => {
    return (
        <div className="group relative rounded-lg w-80 h-96 text-white overflow-hidden">
            <img
                className="absolue h-full w-full object-cover"
                src="/new_york.jpg"
                alt="New York"
            />
            <div className="absolute h-full w-full  transition-opacity bg-black top-0 opacity-30 group-hover:opacity-50"></div>
            <div className="absolute top-0 h-full w-full">
                <div className="h-full w-full flex items-center justify-end flex-col ">
                    <h4 className="text-3xl p-6 font-bold">New york</h4>
                    <div className="h-0 w-full group-hover:h-16 transition-all">
                        <div className="p-4">
                            <Button
                                size="large"
                                fullWidth
                                variant="contained"
                                disableElevation
                            >
                                Discover
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExploreCard;
