import { createContext, useEffect, useState } from "react";
import { useCategories } from "../hooks/useCategories";
import { useTourListings } from "../hooks/useTourListings";
import { useCities } from "../hooks/useCities";

export const ListingsStateContext = createContext<any>(null);

export const ListingsStateProvider = (props: any) => {
  const categoriesQuery = useCategories();
  const listings = useTourListings();
  const cities = useCities();

  const [selectedCity, setSelectedCity] = useState(1);
  const selectedCityName: string = cities.citiesDict?.[selectedCity] || "";
  const localListings = listings.tourListings?.filter((listing: any) => listing.cityId === selectedCity) || [];
  

  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<any>({});
  const [selectedOtherFilter, setSelectedOtherFilter] = useState<any>(false);
  const [selectedPriceRange, setSelectedPriceRange] = useState<any>([0, 1000]);


  const categoryFilteredListings = Object.keys(selectedCategoryFilter).length === 0 ? localListings : localListings.filter((listing: any) => Object.keys(selectedCategoryFilter).includes(listing.categoryId.toString()));

  const otherFilteredListings = !selectedOtherFilter ? categoryFilteredListings : categoryFilteredListings.filter((listing: any) => listing.freeCancellation);


  const isLoading = listings.isLoading || categoriesQuery.isLoading || cities.isLoading;

  const categoryWiseTourCount = localListings?.reduce((acc: any, listing: any) => {
    if (!acc[listing.categoryId]) {
      acc[listing.categoryId] = 0;
    }
    acc[listing.categoryId]++;
    return acc;
  }, {});

  const freeCancellationCount = categoryFilteredListings?.filter((listing: any) => listing.freeCancellation).length;

  const durationWiseTourCount = otherFilteredListings?.reduce((acc: any, listing: any) => {
    if (listing.duration <= 1) {
      acc["Up to 1 hour"] = (acc["Up to 1 hour"] || 0) + 1;
    } else if (listing.duration <= 4) {
      acc["1 to 4 hours"] = (acc["1 to 4 hours"] || 0) + 1;
    } else {
      acc["4 hours and above"] = (acc["4 hours and above"] || 0) + 1;
    }
    return acc;
  }, {});

  const minPrice = Math.min(...otherFilteredListings.map((listing: any) => listing.price));
  const maxPrice = Math.max(...otherFilteredListings.map((listing: any) => listing.price));

  useEffect(()=>{
    setSelectedPriceRange([minPrice, maxPrice]);
  }, [minPrice, maxPrice]);



  const categoryData = categoriesQuery.categories?.map((category: any) => ({
    filterName: category.name,
    count: categoryWiseTourCount?.[category.id] || 0,
    filterId: category.id,
  }));

  const otherData = [{ filterName: "Free Cancellation", count: freeCancellationCount }];

  const durationData = [
    { filterName: "Up to 1 hour", count: durationWiseTourCount?.["Up to 1 hour"] || 0 },
    { filterName: "1 to 4 hours", count: durationWiseTourCount?.["1 to 4 hours"] || 0 },
    { filterName: "4 hours and above", count: durationWiseTourCount?.["4 hours and above"] || 0 },
  ];

  const cityWiseTourCount = otherFilteredListings.reduce((acc: any, listing: any) => {
    if (!acc[listing.cityId]) {
      acc[listing.cityId] = 0;
    }
    acc[listing.cityId]++;
    return acc;
  }, {});

  const selectedCityTourCount = cityWiseTourCount?.[selectedCity] || 0;

  const listingsData = otherFilteredListings?.map((listing: any) => ({
    id: listing.id,
    title: listing.title,
    duration: listing.duration,
    categoryName: categoriesQuery.categoriesDict?.[listing.categoryId] || "",
    cityName: cities.citiesDict?.[listing.cityId] || "",
    freeCancellation: listing.freeCancellation,
    rating: listing.rating,
    reviews: listing.reviews,
    price: listing.price,
    image: listing.image,
  }));
  
  const citiesData = cities.cities;

  const changeCity = (cityId: number) => {
    setSelectedCity(cityId);
  }

  const categoryFilterChange = (categoryId: number) => {
    resetPriceRange();
    if (selectedCategoryFilter[categoryId]) {
      const { [categoryId]: _, ...rest } = selectedCategoryFilter;
      setSelectedCategoryFilter(rest);
    } else {
      setSelectedCategoryFilter({ ...selectedCategoryFilter, [categoryId]: true });
    }
  }

  const otherFilterChange = () => {
    resetPriceRange();
    setSelectedOtherFilter(!selectedOtherFilter);
  }

  const resetPriceRange = () => {
    setSelectedPriceRange([minPrice, maxPrice]);
  }

  const priceRangeChange = (newValue: any) => {
    setSelectedPriceRange(newValue);
  }
  

  return <ListingsStateContext.Provider value={{
    isLoading,
    categoryData,
    otherData,
    durationData,
    selectedCityName,
    selectedCityTourCount,
    listingsData,
    citiesData,
    selectedCity,
    changeCity,
    selectedCategoryFilter,
    categoryFilterChange,
    selectedOtherFilter,
    otherFilterChange,
    minPrice,
    maxPrice,
    selectedPriceRange,
    priceRangeChange,
  }}>{props.children}</ListingsStateContext.Provider>;
}
