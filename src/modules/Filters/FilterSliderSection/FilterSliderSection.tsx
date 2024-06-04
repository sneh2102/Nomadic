import FilterSlider from "../FilterSlider/FilterSlider";

interface FilterSliderSectionProps {
    filterName: string;
    min: number;
    max: number;
}

const FilterSliderSection : React.FC<FilterSliderSectionProps> = (props) => {
    return (
        <>
            <div className="font-medium mt-4">{props.filterName}</div>
            <div className="pt-2">
                <FilterSlider min={props.min} max={props.max}/>
            </div>
            <div className="mt-3 border-t border-gray-border"></div>
        </>
    );
};

export default FilterSliderSection;
