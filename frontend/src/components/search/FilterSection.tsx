import { useContext } from "react";
import FilterItem from "./FilterItem";

export interface FilterItemProps {
    filterName: string;
    filterId: number;
    count: number;
}

interface FilterSectionProps {
    filterName: string;
    filterItems: FilterItemProps[];
    selectedItems: {[key: string]:boolean};
    onFilterChange: (filterId: number) => void;
}

const FilterSection : React.FC<FilterSectionProps> = (props) => {
    return (
        <>
            <div className="font-medium mt-4">{props.filterName}</div>
            <ul className="pt-2">
                {props?.filterItems.map((filterItem, index) => {
                    const checked = Object.keys(props.selectedItems).includes(filterItem.filterId?.toString());
                    return <FilterItem onFilterChange={props.onFilterChange} checked={checked} filterId={filterItem.filterId} parentName={props.filterName} key={index} filterName={filterItem.filterName} count={filterItem.count} />
                })}
            </ul>
            <div className="mt-3 border-t border-gray-border"></div>
        </>
    );
};

export default FilterSection;
