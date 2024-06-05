import { useContext } from "react";
import { ListingsStateContext } from "../../../providers/ListingsStateProvider";
import FilterItem from "../FilterItem/FilterItem";

export interface FilterItemProps {
    filterName: string;
    filterId: number;
    count: number;
}

interface FilterSectionProps {
    filterName: string;
    filterItems: FilterItemProps[];
}

const FilterSection : React.FC<FilterSectionProps> = (props) => {
    const {selectedCategoryFilter, selectedOtherFilter} = useContext(ListingsStateContext);
    let filterState = selectedCategoryFilter;
    if(props.filterName === "Category Types"){
        filterState = selectedCategoryFilter;
    }else if(props.filterName === "Other"){
        filterState = selectedCategoryFilter;
    }
    return (
        <>
            <div className="font-medium mt-4">{props.filterName}</div>
            <ul className="pt-2">
                {props?.filterItems.map((filterItem, index) => {
                    let checked = false;
                    if(props.filterName === "Category Types"){
                        checked = Object.keys(selectedCategoryFilter).includes(filterItem.filterId?.toString());
                    }else if(props.filterName === "Other"){
                        checked = selectedOtherFilter;
                    }
                    return <FilterItem checked={checked} filterId={filterItem.filterId} parentName={props.filterName} key={index} filterName={filterItem.filterName} count={filterItem.count} />
                })}
            </ul>
            <div className="mt-3 border-t border-gray-border"></div>
        </>
    );
};

export default FilterSection;
