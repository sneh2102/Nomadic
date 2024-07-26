import React from 'react'
import SearchSection from '../components/search/SearchSection'
import Header from '../components/ui/Header'
import Footer from '../components/ui/Footer'
import FilterSection from '../components/search/FilterSection'

const SearchPage = () => {
  return (
    <div>
        <Header showScrollAnimation={false} />
        <SearchSection />
        <div className="container mx-auto flex my-12">
                <div className="hidden xl:block xl:basis-2/12">
                    <FilterSection
                        filterName="Category Types"
                        filterItems={[]}
                    />
                    <FilterSection filterName="Other" filterItems={[]} />
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
  )
}

export default SearchPage