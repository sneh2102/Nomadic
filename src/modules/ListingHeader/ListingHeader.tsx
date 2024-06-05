import { Button, Divider } from "@mui/material";
import SwapVertOutlinedIcon from "@mui/icons-material/SwapVertOutlined";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import { ListingsStateContext } from "../../providers/ListingsStateProvider";
import { useContext } from "react";
const ListingHeader: React.FC<any> = (props) => {
    const {selectedCityName, selectedCityTourCount} = useContext(ListingsStateContext)
    return (
        <>
            <div className="mt-2 flex flex-wrap justify-between items-center mb-8">
                <div className="text-lg">
                    <span className="font-medium">{selectedCityTourCount + " "} properties</span> in
                    {" " + selectedCityName}
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
