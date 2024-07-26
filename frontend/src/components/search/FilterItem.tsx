import { Checkbox, FormControlLabel } from "@mui/material";
import { useContext } from "react";

const FilterItem: React.FC<any> = (props) => {
    const categoryFilterChange = (e: any) => {};

    const otherFilterChange = () => {};

    return (
        <li className="flex items-center justify-between -mt-2">
            <div className="flex items-center ">
                <FormControlLabel
                    classes={{
                        label: "text-sm",
                    }}
                    control={
                        <Checkbox
                            size="small"
                            checked={props.checked}
                            value={props.filterId}
                            onChange={(e) => {
                                if (props.parentName === "Category Types") {
                                    categoryFilterChange(e.target.value);
                                } else if (props.parentName === "Other") {
                                    otherFilterChange();
                                }
                            }}
                        />
                    }
                    label={props.filterName}
                />
            </div>
            <div className="text-gray text-sm">{props.count}</div>
        </li>
    );
};

export default FilterItem;
