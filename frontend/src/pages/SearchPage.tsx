import React from "react";
import SearchSection from "../components/search/SearchSection";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";
import FilterSection from "../components/search/FilterSection";
import { useTourCategories } from "../hooks/useTourCategoires";
import { useLocation, useNavigate } from "react-router-dom";
import { useTours } from "../hooks/useTours";
import Listings from "../components/search/Listing";

const SearchPage = () => {
    const { tourCategoriesLoading, tourCategories, toursCategoryDict } = useTourCategories();
    const navigate = useNavigate();
    
    const tourCategoryItems = tourCategories?.data.map((category) => {
        return {
            filterId: category.id,
            filterName: category.name,
            count: category.tourPackageCount,
        };
    });
    const searchparams = new URLSearchParams(useLocation().search);
    const categoriesQuery = searchparams.get("categories");
    console.log(categoriesQuery);
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
        console.log(searchparams.toString());
        navigate({ search: searchparams.toString() });
    };

    const { tours, toursLoading } = useTours({
        categories: categoriesQuery,
    });

    const toursData = tours?.data.map((tour) => {
        return {
            id:tour.id,
            title: tour.name,
            cityName: `${tour.location}, ${tour.city}`,
            categoryName: toursCategoryDict[tour.tourCategoryId],
            duration: 1,
            freeCancellation: tour.freeCancelationAvailable,
            rating: 5,
            reviews: 1,
            price: tour.price,
            image: tour.image,
        };
    }) || [];

    if (tourCategoriesLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Header showScrollAnimation={false} />
            <SearchSection />
            <div className="container mx-auto flex my-12">
                <div className="hidden xl:block xl:basis-2/12">
                    <FilterSection
                        filterName="Category Types"
                        filterItems={tourCategoryItems!}
                        selectedItems={selectedCategoryFilter}
                        onFilterChange={onCategoryFilterChange}
                    />
                    {/* <FilterSection filterName="Other" filterItems={[]} /> */}
                    {/* <FilterSliderSection
                        min={minPrice}
                        max={maxPrice}
                        filterName="Price"
                    />
                    <FilterSection
                        filterName="Duration"
                        filterItems={durationData}
                    /> */}
                </div>
                <div className="xl:basis-10/12 px-10">
                    {tours && <Listings listings={toursData} />}
                    {/* <ListingHeader toggleDrawer={toggleDrawer} />
                    <Listings /> */}
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
