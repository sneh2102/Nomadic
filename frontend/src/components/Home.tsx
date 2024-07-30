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
            <div className="relative h-screen">
                <div className="absolute w-full h-full -z-10">
                    <img
                        className="object-cover w-full h-full"
                        src="/home_bg.jpg"
                        alt="home background"
                    />
                    <div className="absolute top-0 w-full h-full bg-opacity-75 bg-purple"></div>
                </div>
                <div className="flex justify-center h-screen text-white">
                    <div className="w-auto pt-48 md:pt-80 md:w-3/4">
                        <h1 className="mb-6 text-3xl font-semibold tracking-tight text-center md:text-6xl">
                            Find Next Place To Visit
                        </h1>
                        <p className="mb-16 text-center">
                            Discover amazing places at exclusive deals
                        </p>
                        <form>
                            <div className="flex flex-col w-full p-2 text-black bg-white rounded-md h-35 md:h-24 md:rounded-full md:flex-row">
                                <div className="flex items-end gap-1 pl-8 mb-3 mr-4 basis-10/12 ">
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
                                                if (startDate) {
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
                        <h2 className="my-4 text-3xl font-medium tracking-tighter">
                            Popular Destinations
                        </h2>
                        <p className="my-4 mb-12 tracking-tight text-grey">
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
                    <div className="flex flex-col h-full gap-8 my-16 mt-28 md:flex-row">
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
                        <h2 className="my-4 text-3xl font-medium tracking-tighter">
                            Recommended
                        </h2>
                        <p className="my-4 mb-12 tracking-tight text-grey">
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
                        <div className="flex flex-col items-center gap-16 justify-evenly md:flex-row">
                            <div className="flex flex-col items-center w-full max-w-80">
                                <GppGoodOutlined
                                    sx={{
                                        width: "72px",
                                        height: "72px",
                                    }}
                                />
                                <h4 className="my-4 text-xl tracking-tighter text-center">
                                    Best Price Guarantee
                                </h4>
                                <p className="tracking-tighter text-center text-grey">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.
                                </p>
                            </div>
                            <div className="flex flex-col items-center w-full max-w-80">
                                <ShoppingCartOutlined
                                    sx={{
                                        width: "72px",
                                        height: "72px",
                                    }}
                                />
                                <h4 className="my-4 text-xl tracking-tighter text-center">
                                    Easy & Quick Booking
                                </h4>
                                <p className="tracking-tighter text-center text-grey">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.
                                </p>
                            </div>
                            <div className="flex flex-col items-center w-full max-w-80">
                                <HeadsetMicOutlined
                                    sx={{
                                        width: "72px",
                                        height: "72px",
                                    }}
                                />
                                <h4 className="my-4 text-xl tracking-tighter text-center">
                                    Customer Care 24/7
                                </h4>
                                <p className="tracking-tighter text-center text-grey">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-light-blue">
                    <div className="container py-8 mx-auto my-4 xl:py-16">
                        <div className="flex flex-col gap-2 mx-4 xl:flex-row">
                            <div className="xl:basis-4/12">
                                <h3 className="my-8 text-3xl font-medium tracking-tighter">
                                    What our customers are saying us?
                                </h3>
                                <p className="mt-8 mb-6 text-grey xl:mb-20">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Maecenas varius tortor
                                    nibh, sit amet tempor nibh finibus et.
                                    Aenean eu enim justo.
                                </p>
                                <div className="flex flex-col items-center gap-8 xl:gap-32 xl:flex-row">
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
                        <p className="my-2 text-center text-grey">
                            Interdum et malesuada fames
                        </p>
                        <div className="flex flex-col gap-12 mx-4 my-12 md:flex-row md:mx-0">
                            <BlogCard />
                            <BlogCard />
                            <BlogCard />
                        </div>
                    </div>
                </div>
                <div className="flex justify-between bg-purple">
                    <div className="container flex flex-col justify-between mx-auto my-16 md:flex-row">
                        <div className="flex flex-col items-center mx-4 md:flex-row basis-6/12 md:mx-0">
                            <DraftsOutlined
                                sx={{
                                    width: "64px",
                                    height: "64px",
                                    color: "white",
                                }}
                            />
                            <div className="pl-8">
                                <h4 className="my-2 text-xl font-semibold text-white">
                                    Your Travel Journey Starts Here
                                </h4>
                                <p className="text-white">
                                    Stay up to date with our latest news and
                                    offers
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 mx-4 h-14 basis-6/12 md:flex-row md:mx-0">
                            <div className="bg-white rounded-md grow">
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
