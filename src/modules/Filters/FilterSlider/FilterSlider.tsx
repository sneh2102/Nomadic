import { Slider } from "@mui/material";
import React, { useContext } from "react";
import { ListingsStateContext } from "../../../providers/ListingsStateProvider";

interface FilterSliderProps {
    min: number;
    max: number;
}


function valuetext(value: number) {
    return `$${value}`;
  }

const FilterSlider: React.FC<FilterSliderProps> = (props) => {
  const {selectedPriceRange, priceRangeChange} = useContext(ListingsStateContext);

const handleChange = (event: Event, newValue: number | number[]) => {
    priceRangeChange(newValue as number[]);
  };

  return (
    <>
    <div>
        {valuetext(selectedPriceRange[0])} - {valuetext(selectedPriceRange[1])}
    </div>
    <Slider
      key={props.min + props.max}
        getAriaLabel={() => 'Price range'}
        value={selectedPriceRange}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        min={props.min}
        max={props.max}
      />
      </>
  )
}

export default FilterSlider