import FilterItem from "../FilterItem/FilterItem";

export interface FilterItemProps {
    filterName: string;
    count: number;
}

interface FilterSectionProps {
    filterName: string;
    filterItems: FilterItemProps[];
}

const FilterSection : React.FC<FilterSectionProps> = (props) => {
    return (
        <>
            <div className="font-medium mt-4">{props.filterName}</div>
            <ul className="pt-2">
                {props?.filterItems.map((filterItem, index) => (
                    <FilterItem key={index} filterName={filterItem.filterName} count={filterItem.count} />
                ))}
            </ul>
            <div className="mt-3 border-t border-gray-border"></div>
        </>
    );
};

export default FilterSection;
