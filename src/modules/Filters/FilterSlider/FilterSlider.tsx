import { Slider } from "@mui/material";
import React from "react";

interface FilterSliderProps {
    min: number;
    max: number;
}


function valuetext(value: number) {
    return `$${value}`;
  }

const FilterSlider: React.FC<FilterSliderProps> = (props) => {
const [value, setValue] = React.useState<number[]>([props.min, props.max]);

const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };
  return (
    <>
    <div>
        {valuetext(value[0])} - {valuetext(value[1])}
    </div>
    <Slider
        getAriaLabel={() => 'Price range'}
        value={value}
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