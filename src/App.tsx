import { Box, Drawer } from "@mui/material";
import Header from "./modules/Header/Header";
import SearchSection from "./modules/SearchSection/SearchSection";
import FilterSection from "./modules/Filters/FilterSection/FilterSection";
import FilterSliderSection from "./modules/Filters/FilterSliderSection/FilterSliderSection";
import ListingHeader from "./modules/ListingHeader/ListingHeader";
import Listings from "./modules/Listings/Listings";
import Footer from "./modules/Footer/Footer";
import React, { useContext } from "react";
import { ListingsStateContext } from "./providers/ListingsStateProvider";

function App() {
    const {
        isLoading,
        categoryData,
        otherData,
        durationData,
        maxPrice,
        minPrice,
    } = useContext(ListingsStateContext);
    const [open, setOpen] = React.useState(false);


    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };
    if (isLoading) return <div>Loading...</div>;
    return (
        <>
            <Header />
            <SearchSection />
            <div className="container mx-auto flex my-12">
                <div className="hidden xl:block xl:basis-2/12">
                    <FilterSection
                        filterName="Category Types"
                        filterItems={categoryData}
                    />
                    <FilterSection filterName="Other" filterItems={otherData} />
                    <FilterSliderSection
                        min={minPrice}
                        max={maxPrice}
                        filterName="Price"
                    />
                    <FilterSection
                        filterName="Duration"
                        filterItems={durationData}
                    />
                </div>
                <div className="xl:basis-10/12 px-10">
                    <ListingHeader toggleDrawer={toggleDrawer} />
                    <Listings />
                </div>
            </div>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                <Box sx={{ width: 250 }} role="presentation">
                    <div className="p-8">
                        <FilterSection
                            filterName="Category Types"
                            filterItems={categoryData}
                        />
                        <FilterSection
                            filterName="Other"
                            filterItems={otherData}
                        />
                        <FilterSliderSection
                            min={minPrice}
                            max={maxPrice}
                            filterName="Price"
                        />
                        <FilterSection
                            filterName="Duration"
                            filterItems={durationData}
                        />
                    </div>
                </Box>
            </Drawer>
            <Footer />
        </>
    );
}

export default App;
