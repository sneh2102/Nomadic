import { Button, Divider } from "@mui/material";
import SwapVertOutlinedIcon from "@mui/icons-material/SwapVertOutlined";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
const ListingHeader: React.FC<any> = (props) => {
    return (
        <>
            <div className="mt-2 flex flex-wrap justify-between items-center mb-8">
                <div className="text-lg">
                    <span className="font-medium">1,234 properties</span> in
                    Halifax
                </div>
                <div className="flex gap-1">
                    <div className="xl:hidden">
                        <Button variant="outlined"   onClick={props.toggleDrawer(true)}>
                            <FilterAltOutlinedIcon />
                            <span className="ml-1">Filter</span>
                        </Button>
                    </div>
                    <Button variant="outlined">
                        <SwapVertOutlinedIcon />
                        <span className="ml-1">Sort</span>
                    </Button>
                </div>
            </div>
            <Divider />
        </>
    );
};

export default ListingHeader;
