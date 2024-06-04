import { Checkbox, FormControlLabel } from "@mui/material";
import { FilterItemProps } from "../FilterSection/FilterSection";

const FilterItem : React.FC<FilterItemProps> = (props) => {
    return (
        <li className="flex items-center justify-between -mt-2">
            <div className="flex items-center ">
                <FormControlLabel
                    classes={{
                        label: "text-sm",
                    }}
                    control={<Checkbox size="small" />}
                    label={props.filterName}
                />
            </div>
            <div className="text-gray text-sm">{props.count}</div>
        </li>
    );
};

export default FilterItem;
