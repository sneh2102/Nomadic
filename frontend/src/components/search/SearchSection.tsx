import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
} from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const SearchSection = () => {
    const selectedCityName = "London";
    const selectedCity = 1;
    const changeCity = (city: any) => {
    }
    const citiesData = [
        { id: 1, name: "London" },
        { id: 2, name: "Paris" },
        { id: 3, name: "New York" },
    ];

    return (
        <div className="bg-light-gray py-4 pb-8 pt-32">
            <div className="container mx-auto">
                <h1 className="text-3xl font-medium text-center pt-8 mb-8">
                    Tours in {" " + selectedCityName}
                </h1>
                <div className="my-2 p-4 bg-white flex flex-col lg:flex-row rounded-lg">
                    <div className="flex mt-4 lg:mt-0 lg:ml-4 basis-11/12">
                        <LocationOnOutlinedIcon className="text-gray" />
                        <div className="ml-2 grow">
                            <FormControl fullWidth variant="standard">
                                <InputLabel id="demo-simple-select-standard-label">
                                    Location
                                </InputLabel>
                                <Select
                                    fullWidth
                                    labelId="demo-simple-select-standard-label"
                                    id="demo-simple-select-standard"
                                    value={selectedCity}
                                    onChange={(e) => {
                                        changeCity(e.target.value);
                                    }}
                                    label="Location"
                                >
                                    {citiesData.map((city: any) => (
                                        <MenuItem key={city.id} value={city.id}>
                                            {city.name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </div>
                        <div className="ml-4 border-l border-gray-border"></div>
                    </div>
                    <div className="basis-1/12 mt-4 lg:mt-0">
                        <Button
                            variant="contained"
                            color="primary"
                            className="w-full h-full"
                        >
                            Search
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchSection;
