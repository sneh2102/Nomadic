import {
    Button,
    Divider,
    IconButton,
    Input,
    InputBase,
    MenuItem,
    Rating,
    Select,
    TextField,
} from "@mui/material";
import Slider, { Settings } from "react-slick";
import TransparentButton from "./ui/TransparentButton";
import { useEffect, useRef, useState } from "react";
import RoundedButton from "./ui/RoundedButton";
import ExploreCard from "./ui/ExploreCard";
import {
    ChevronLeft,
    ChevronRight,
    DraftsOutlined,
    GppGoodOutlined,
    HeadsetMicOutlined,
    Menu,
    Shield,
    ShieldOutlined,
    ShoppingCartOutlined,
} from "@mui/icons-material";
import LearningCard from "./ui/LearningCard";
import TourCard from "./ui/TourCard";
import TestimonialCard from "./ui/TestimonialCard";
import BlogCard from "./ui/BlogCard";
import Footer from "./ui/Footer";
import Header from "./ui/Header";
import { useTours } from "../hooks/useTours";
import { ErrorBoundary } from "react-error-boundary";
import { TourList } from "../interfaces/tour.interface";
import ErrorComponent from "./ui/ErrorComponent";
import { useLocations } from "../hooks/useLocations";
import { Link } from "react-router-dom";
import { DatePicker } from "@mui/x-date-pickers";
import { add, format } from "date-fns";

const RecommendedTourList = (props: { tours: TourList }) => {
    const settings: Settings = {
        dots: true,
        infinite: false,
        speed: 750,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1550,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1050,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                },
            },
        ],
    };
    return (
        <ErrorBoundary fallback={<ErrorComponent />}>
            <Slider {...settings}>
                {props.tours.data.map((tour, index) => (
                    <TourCard
                        key={tour.id}
                        name={tour.name}
                        location={tour.location}
                        city={tour.city}
                        rating={1.2}
                        reviews={1234}
                        price={tour.price}
                        image={tour.image}
                    />
                ))}
            </Slider>
        </ErrorBoundary>
    );
};

const Home = () => {
    const { tours, toursLoading, toursError } = useTours({
        categories: null,
        freeCancelationAvailable: null,
        maxPrice: null,
        minPrice: null,
        city: null,
        page: null,
        sortBy: null,
        sortOrder: null,
        startDate: null,
        endDate: null,
    });
    const { locations } = useLocations();
    const [selectedLocation, setSelectedLocation] = useState<string>(
        locations?.[0].city || ""
    );
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [endDate, setEndDate] = useState<Date | null>(
        add(new Date(), { days: 15 })
    );
    const settings: Settings = {
        dots: true,
        infinite: false,
        speed: 750,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1550,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1050,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                },
            },
        ],
    };

    const testimonialSliderSettings: Settings = {
        dots: true,
        infinite: true,
        speed: 750,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                },
            },
        ],
    };
    const popularDestinations = [
        {
            name: "Halifax",
            image: "/halifax.jpg",
        },
        {
            name: "New York",
            image: "/new_york.jpg",
        },
        {
            name: "Paris",
            image: "/paris.jpg",
        },
        {
            name: "London",
            image: "/london.jpg",
        },
        {
            name: "Tokyo",
            image: "/tokyo.jpg",
        },
        {
            name: "Dubai",
            image: "/dubai.jpg",
        },
        {
            name: "Sydney",
            image: "/sydney.jpg",
        },
        {
            name: "Rome",
            image: "/rome.jpg",
        },
    ];
    const guides = [
        {
            title: "Things To Do On Your Trip",
            image: "/canyon.jpg",
            pretite: "",
        },
        {
            title: "Up to 70% Discount",
            image: "/beach.jpg",
            pretite: "Enjoy Summer Deals",
        },
    ];
    return (
        <div className="">
            <Header showScrollAnimation={true} />
            <div className="h-screen relative">
                <div className="h-full w-full absolute -z-10">
                    <img
                        className="object-cover w-full h-full"
                        src="/home_bg.jpg"
                        alt="home background"
                    />
                    <div className="bg-purple bg-opacity-75 h-full w-full absolute top-0"></div>
                </div>
                <div className="text-white h-screen flex justify-center">
                    <div className="pt-48 md:pt-80 w-auto md:w-3/4">
                        <h1 className="text-3xl md:text-6xl font-semibold tracking-tight mb-6 text-center">
                            Find Next Place To Visit
                        </h1>
                        <p className="text-center mb-16">
                            Discover amazing places at exclusive deals
                        </p>
                        <form>
                            <div className="h-35 md:h-24 p-2 w-full bg-white rounded-md md:rounded-full text-black flex flex-col md:flex-row">
                                <div className="basis-10/12 pl-8 mb-3 mr-4 flex items-end gap-1 ">
                                    <div className="basis-6/12">
                                        <div className="text-sm font-medium">
                                            Location
                                        </div>
                                        <Select
                                            label="Location"
                                            value={selectedLocation}
                                            onChange={(e) =>
                                                setSelectedLocation(
                                                    e.target.value
                                                )
                                            }
                                            MenuProps={{
                                                sx: {
                                                    height: "300px",
                                                },
                                            }}
                                            fullWidth
                                            sx={{
                                                outline: "none",
                                                border: "none",
                                            }}
                                        >
                                            {locations?.map((location) => (
                                                <MenuItem value={location.city}>
                                                    {location.city}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </div>
                                    <div className="basis-3/12">
                                        <DatePicker
                                            label="Start Date"
                                            value={startDate}
                                            onChange={(value) =>
                                                setStartDate(value)
                                            }
                                            disablePast
                                        />
                                    </div>
                                    <div className="basis-3/12">
                                        <DatePicker
                                            label="End Date"
                                            value={endDate}
                                            onChange={(value) =>
                                                setEndDate(value)
                                            }
                                            shouldDisableDate={(date) => {
                                                if(startDate){
                                                    return date < startDate;
                                                }
                                                return false;
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="basis-2/12">
                                    <Link
                                        to={
                                            selectedLocation && startDate && endDate
                                                ? `/search?location=${selectedLocation}&startDate=${format(startDate, 'yyyy-MM-dd')}&endDate=${format(endDate, 'yyyy-MM-dd')}`
                                                : "#"
                                        }
                                    >
                                        <RoundedButton
                                            type="submit"
                                            variant="contained"
                                        >
                                            Search
                                        </RoundedButton>
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div>
                <div className="container mx-auto">
                    <div className="my-16 mt-32">
                        <h2 className="text-3xl font-medium tracking-tighter my-4">
                            Popular Destinations
                        </h2>
                        <p className="text-grey my-4 mb-12 tracking-tight">
                            These popular destinations have a lot to offer
                        </p>
                        <div>
                            <Slider {...settings}>
                                {popularDestinations.map(
                                    (destination, index) => (
                                        <ExploreCard
                                            key={index}
                                            title={destination.name}
                                            image={destination.image}
                                        />
                                    )
                                )}
                            </Slider>
                        </div>
                    </div>
                    <div className="my-16 mt-28 h-full flex gap-8 flex-col md:flex-row">
                        <div className="md:basis-1/2 h-[300px] mx-2 md:h-[550px]">
                            <LearningCard
                                image={guides[0].image}
                                title={guides[0].title}
                                pretitle={guides[0].pretite}
                            />
                        </div>
                        <div className="md:basis-1/2 h-[300px] mx-2 md:h-[550px]">
                            <LearningCard
                                image={guides[1].image}
                                title={guides[1].title}
                                pretitle={guides[1].pretite}
                            />
                        </div>
                    </div>
                    <div className="my-16 mt-28">
                        <h2 className="text-3xl font-medium tracking-tighter my-4">
                            Recommended
                        </h2>
                        <p className="text-grey my-4 mb-12 tracking-tight">
                            Top picks curated for you
                        </p>
                        <div>
                            {toursLoading && <p>Loading...</p>}
                            {tours && <RecommendedTourList tours={tours} />}
                            {toursError && (
                                <ErrorComponent error={toursError} />
                            )}
                        </div>
                    </div>
                    <div className="my-16 mt-32">
                        <div className="flex justify-evenly flex-col md:flex-row items-center gap-16">
                            <div className="flex items-center flex-col w-full max-w-80">
                                <GppGoodOutlined
                                    sx={{
                                        width: "72px",
                                        height: "72px",
                                    }}
                                />
                                <h4 className="text-center text-xl my-4 tracking-tighter">
                                    Best Price Guarantee
                                </h4>
                                <p className="text-center tracking-tighter text-grey">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.
                                </p>
                            </div>
                            <div className="flex items-center flex-col w-full max-w-80">
                                <ShoppingCartOutlined
                                    sx={{
                                        width: "72px",
                                        height: "72px",
                                    }}
                                />
                                <h4 className="text-center text-xl my-4 tracking-tighter">
                                    Easy & Quick Booking
                                </h4>
                                <p className="text-center tracking-tighter text-grey">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.
                                </p>
                            </div>
                            <div className="flex items-center flex-col w-full max-w-80">
                                <HeadsetMicOutlined
                                    sx={{
                                        width: "72px",
                                        height: "72px",
                                    }}
                                />
                                <h4 className="text-center text-xl my-4 tracking-tighter">
                                    Customer Care 24/7
                                </h4>
                                <p className="text-center tracking-tighter text-grey">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-light-blue">
                    <div className="container mx-auto my-4 py-8 xl:py-16">
                        <div className="flex gap-2 flex-col xl:flex-row mx-4">
                            <div className="xl:basis-4/12">
                                <h3 className="text-3xl font-medium tracking-tighter my-8">
                                    What our customers are saying us?
                                </h3>
                                <p className="text-grey mt-8 mb-6 xl:mb-20">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Maecenas varius tortor
                                    nibh, sit amet tempor nibh finibus et.
                                    Aenean eu enim justo.
                                </p>
                                <div className="flex gap-8 xl:gap-32 flex-col xl:flex-row items-center">
                                    <div>
                                        <div className="text-3xl font-semibold">
                                            13m+
                                        </div>
                                        <div className="text-grey">
                                            Happy People
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-3xl font-semibold">
                                            4.88
                                        </div>
                                        <div className="text-grey">
                                            Overall rating
                                        </div>
                                        <Rating
                                            value={4.88}
                                            readOnly
                                            size="small"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="xl:basis-8/12 max-w-[900px]">
                                <Slider {...testimonialSliderSettings}>
                                    <TestimonialCard />
                                    <TestimonialCard />
                                    <TestimonialCard />
                                    <TestimonialCard />
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto">
                    <div className="mt-32 mb-16 ">
                        <h3 className="text-3xl font-semibold text-center">
                            Get inspiration for your next trip
                        </h3>
                        <p className="text-center text-grey my-2">
                            Interdum et malesuada fames
                        </p>
                        <div className="my-12 flex gap-12 flex-col md:flex-row mx-4 md:mx-0">
                            <BlogCard />
                            <BlogCard />
                            <BlogCard />
                        </div>
                    </div>
                </div>
                <div className="bg-purple flex justify-between">
                    <div className="my-16 container mx-auto flex justify-between flex-col md:flex-row">
                        <div className="flex flex-col md:flex-row items-center basis-6/12 mx-4 md:mx-0">
                            <DraftsOutlined
                                sx={{
                                    width: "64px",
                                    height: "64px",
                                    color: "white",
                                }}
                            />
                            <div className="pl-8">
                                <h4 className="text-white text-xl my-2 font-semibold">
                                    Your Travel Journey Starts Here
                                </h4>
                                <p className="text-white">
                                    Stay up to date with our latest news and
                                    offers
                                </p>
                            </div>
                        </div>
                        <div className="flex h-14 basis-6/12 gap-4 flex-col md:flex-row  mx-4 md:mx-0">
                            <div className="bg-white grow rounded-md">
                                <TextField placeholder="Your email" fullWidth />
                            </div>
                            <Button variant="contained">Subscribe</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-20">
                <Footer />
            </div>
        </div>
    );
};

export default Home;
