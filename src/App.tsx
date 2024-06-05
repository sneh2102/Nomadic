import { Box, Drawer } from "@mui/material";
import Header from "./modules/Header/Header";
import SearchSection from "./modules/SearchSection/SearchSection";
import FilterSection from "./modules/Filters/FilterSection/FilterSection";
import FilterSliderSection from "./modules/Filters/FilterSliderSection/FilterSliderSection";
import ListingHeader from "./modules/ListingHeader/ListingHeader";
import Listings from "./modules/Listings/Listings";
import Footer from "./modules/Footer/Footer";
import React from "react";

function App() {
    const categories = [
        { filterName: "Tour", count: 12 },
        { filterName: "Atttractions", count: 18 },
        { filterName: "Day Trips", count: 21 },
        { filterName: "Outdoor Activities", count: 3 },
    ];
    const other = [{ filterName: "Free Cancellation", count: 28 }];
    const duration = [
        { filterName: "Up to 1 hour", count: 12 },
        { filterName: "1 to 4 hours", count: 12 },
        { filterName: "4 hours and above", count: 12 },
    ];
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };
    return (
        <>
            <Header />
            <SearchSection />
            <div className="container mx-auto flex my-12">
                <div className="hidden xl:block xl:basis-2/12">
                    <FilterSection
                        filterName="Category Types"
                        filterItems={categories}
                    />
                    <FilterSection filterName="Other" filterItems={other} />
                    <FilterSliderSection
                        min={0}
                        max={1000}
                        filterName="Price"
                    />
                    <FilterSection
                        filterName="Duration"
                        filterItems={duration}
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
                            filterItems={categories}
                        />
                        <FilterSection filterName="Other" filterItems={other} />
                        <FilterSliderSection
                            min={0}
                            max={1000}
                            filterName="Price"
                        />
                        <FilterSection
                            filterName="Duration"
                            filterItems={duration}
                        />
                    </div>
                </Box>
            </Drawer>
            <Footer />
        </>
    );
}

export default App;
