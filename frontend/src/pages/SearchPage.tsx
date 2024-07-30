import React from "react";
import SearchSection from "../components/search/SearchSection";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";
import FilterSection from "../components/search/FilterSection";
import { useTourCategories } from "../hooks/useTourCategoires";
import { useLocation, useNavigate } from "react-router-dom";
import { useTours } from "../hooks/useTours";
import Listings from "../components/search/Listing";
import FilterSliderSection from "../components/search/FilterSliderSection";
import ListingHeader from "../components/search/ListingHeader";
import { Pagination } from "@mui/material";
import { max, min } from "date-fns";

const SearchPage = () => {
    const searchparams = new URLSearchParams(useLocation().search);
    const categoriesQuery = searchparams.get("categories");
    const locationQuery = searchparams.get("location");
    const minPriceQuery = searchparams.get("minPrice");
    const maxPriceQuery = searchparams.get("maxPrice");
    const sortByQuery = searchparams.get("sortBy");
    const sortOrderQuery = searchparams.get("sortOrder");
    const pageQuery = searchparams.get("page");
    const startDateQuery = searchparams.get("startDate");
    const endDateQuery = searchparams.get("endDate");
    const minDurationQuery = searchparams.get("minDuration");
    const maxDurationQuery = searchparams.get("maxDuration");

    const freeCancelationAvailableQuery = searchparams.get(
        "freeCancelationAvailable"
    );
    const { tourCategoriesLoading, tourCategories, toursCategoryDict } =
        useTourCategories({
            city: locationQuery,
            startDate: startDateQuery,
            endDate: endDateQuery,
        });
    const navigate = useNavigate();

    const tourCategoryItems = tourCategories?.data.map((category) => {
        return {
            filterId: category.id,
            filterName: category.name,
            count: category.tourPackageCount,
        };
    });
    const categoriesSelectedFiltersArray = categoriesQuery
        ? categoriesQuery.split(",")
        : [];
    const initialCategoryFilter: { [key: string]: boolean } = {};
    const selectedCategoryFilter = categoriesSelectedFiltersArray.reduce(
        (acc, category) => {
            acc[category] = true;
            return acc;
        },
        initialCategoryFilter
    );

    const onCategoryFilterChange = (filterId: number) => {
        selectedCategoryFilter[filterId] = !selectedCategoryFilter[filterId];
        const selectedCategoryString = Object.keys(selectedCategoryFilter)
            .filter((key) => selectedCategoryFilter[key])
            .join(",");
        searchparams.set("categories", selectedCategoryString);
        searchparams.delete("page");
        navigate({ search: searchparams.toString() }, { replace: true });
    };

    const { tours, toursLoading } = useTours({
        categories: categoriesQuery,
        city: locationQuery,
        freeCancelationAvailable: freeCancelationAvailableQuery,
        minPrice: minPriceQuery,
        maxPrice: maxPriceQuery,
        sortBy: sortByQuery,
        sortOrder: sortOrderQuery,
        page: pageQuery,
        startDate: startDateQuery,
        endDate: endDateQuery,
    });

    const toursData =
        tours?.data.map((tour) => {
            return {
                id: tour.id,
                title: tour.name,
                cityName: `${tour.location}, ${tour.city}`,
                categoryName: toursCategoryDict[tour.tourCategoryId],
                duration: tour.duration,
                freeCancellation: tour.freeCancelationAvailable,
                rating: 5,
                reviews: 1,
                price: tour.price,
                image: tour.image,
                startDate: tour.startDate,
                endDate: tour.endDate,
            };
        }) || [];

    const otherData = [
        {
            filterId: 1,
            filterName: "Free Cancelation",
            count: tours?.meta.freeCancelationAvailableCount || 0,
        },
    ];

    const selectedOtherFilter: { [key: string]: boolean } = {
        ...(freeCancelationAvailableQuery === "true" ? { 1: true } : {}),
    };

    const onOtherFilterChange = (filterId: number) => {
        if (selectedOtherFilter[filterId]) {
            delete selectedOtherFilter[filterId];
        } else {
            selectedOtherFilter[filterId] = true;
        }
        searchparams.set(
            "freeCancelationAvailable",
            String(selectedOtherFilter[filterId] || "")
        );
        searchparams.delete("page");
        navigate({ search: searchparams.toString() }, { replace: true });
    };

    const durationData = [
        {
            filterId: 1,
            filterName: "1 day",
            count: 0,
        },
        {
            filterId: 2,
            filterName: "2 days",
            count: 0,
        },
        {
            filterId: 3,
            filterName: "3-7 days",
            count: 0,
        },
        {
            filterId: 4,
            filterName: "8+ days",
            count: 0,
        },
    ];

    const selectedDurationFilter: { [key: string]: boolean } = {};

    if(minDurationQuery){
        const minDuration = parseInt(minDurationQuery, 10);
        const maxDuration = maxDurationQuery ? parseInt(maxDurationQuery, 10) : null;
        if(minDuration <= 1 ){
            selectedDurationFilter[1] = true;
        }else if(minDuration <= 2){
            selectedDurationFilter[2] = true;
        }
        if(minDuration >= 3 && (maxDuration && maxDuration <= 7)){
            selectedDurationFilter[3] = true;
        }else if(maxDuration && maxDuration <= 7){
            selectedDurationFilter[2] = true;
            selectedDurationFilter[3] = true;
        }
        if(minDuration >= 8){
            selectedDurationFilter[4] = true;
        }
        
        // const maxDuration = maxDurationQuery ? parseInt(maxDurationQuery, 10) : null;
        // if(minDuration <= 1 ){
        //     selectedDurationFilter[1] = true;
        // } else if(minDuration <= 2){
        //     selectedDurationFilter[2] = true;
        // }else if(minDuration <= 3 && (maxDuration && maxDuration <= 7)){
        //     selectedDurationFilter[3] = true;
        // }else if(minDuration >= 8){
        //     selectedDurationFilter[4] = true;
        // }
        // if(maxDuration){
        //     if(maxDuration <= 2 ){
        //         selectedDurationFilter[2] = true;
        //     }else if(maxDuration <= 7){
        //         selectedDurationFilter[2] = true;
        //         selectedDurationFilter[3] = true;
        //     }
        // }
    }
    // console.log(maxDurationQuery);
    // if(maxDurationQuery){
    //     const maxDuration = parseInt(maxDurationQuery, 10);
    //     console.log({maxDuration});
    //     if(maxDuration <= 2 ){
    //         selectedDurationFilter[2] = true;
    //     }else if(maxDuration <= 7){
    //         selectedCategoryFilter[2] = true;
    //         selectedDurationFilter[3] = true;
    //     }
    // }

    console.log(selectedDurationFilter);
    const onDurationFilterChange = (filterId: number) => {
        // if(filterId === 1){
        //     searchparams.set("minDuration", "1");
        // }else if(filterId === 2){
        // navigate({ search: searchparams.toString() }, { replace: true });
    }

    if (tourCategoriesLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Header showScrollAnimation={false} />
            <SearchSection
                selectedCityName={locationQuery}
                startDate={startDateQuery}
                endDate={endDateQuery}
            />
            <div className="container mx-auto flex my-12">
                <div className="hidden xl:block xl:basis-2/12">
                    <FilterSection
                        filterName="Category Types"
                        filterItems={tourCategoryItems!}
                        selectedItems={selectedCategoryFilter}
                        onFilterChange={onCategoryFilterChange}
                    />
                    <FilterSection
                        filterName="Other"
                        filterItems={otherData}
                        selectedItems={selectedOtherFilter}
                        onFilterChange={onOtherFilterChange}
                    />
                    {tours?.meta.minPrice && tours?.meta.maxPrice && (
                        <FilterSliderSection
                            min={tours.meta.minPrice}
                            max={tours.meta.maxPrice}
                            selectedMin={
                                minPriceQuery ? parseInt(minPriceQuery) : null
                            }
                            selectedMax={
                                maxPriceQuery ? parseInt(maxPriceQuery) : null
                            }
                            filterName="Price"
                        />
                    )}
                    <FilterSection
                        filterName="Duration"
                        filterItems={durationData}
                        onFilterChange={onDurationFilterChange}
                        selectedItems={selectedDurationFilter}
                    />
                </div>
                <div className="xl:basis-10/12 px-10">
                    <ListingHeader
                        selectedCityName={locationQuery || ""}
                        selectedCityTourCount={tours?.meta.total || 0}
                        toggleDrawer={() => {}}
                        selectedSortOrder={sortOrderQuery}
                        selectedSortBy={sortByQuery}
                    />
                    <Pagination
                        sx={{
                            margin: "20px 0",
                            display: "flex",
                            justifyContent: "center",
                        }}
                        page={pageQuery ? parseInt(pageQuery) : 1}
                        count={tours?.meta.totalPages}
                        onChange={(e, page) => {
                            searchparams.set("page", String(page));
                            navigate(
                                { search: searchparams.toString() },
                                { replace: true }
                            );
                        }}
                        size="large"
                        shape="rounded"
                    />
                    {tours && <Listings listings={toursData} />}
                    <Pagination
                        sx={{
                            margin: "20px 0",
                            display: "flex",
                            justifyContent: "center",
                        }}
                        page={pageQuery ? parseInt(pageQuery) : 1}
                        count={tours?.meta.totalPages}
                        onChange={(e, page) => {
                            searchparams.set("page", String(page));
                            navigate(
                                { search: searchparams.toString() },
                                {
                                    replace: true,
                                }
                            );
                        }}
                        size="large"
                        shape="rounded"
                    />
                </div>
            </div>
            {/* <Drawer open={open} onClose={toggleDrawer(false)}>
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
            </Drawer> */}
            <Footer />
        </div>
    );
};

export default SearchPage;
