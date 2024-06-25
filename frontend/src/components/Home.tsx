import {
    Button,
    Divider,
    IconButton,
    Input,
    InputBase,
    Rating,
    TextField,
} from "@mui/material";
import Slider, { Settings } from "react-slick";
import TransparentButton from "./ui/TransparentButton";
import { useEffect, useRef } from "react";
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

const Home = () => {
    const navRef = useRef<HTMLElement>(null);
    useEffect(() => {
        const nav = navRef.current;
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                nav?.classList.remove("bg-transparent");
                nav?.classList.add("bg-purple");
            } else {
                nav?.classList.add("bg-transparent");
                nav?.classList.remove("bg-purple");
            }
        });
    }, []);

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
    ]
    const guides = [
        {
            title: "Things To Do On Your Trip",
            image: "/canyon.jpg",
            pretite: ""
        },
        {
            title: "Up to 70% Discount",
            image: "/beach.jpg",
            pretite: "Enjoy Summer Deals"
        }
    ]
    const tours = [
        {
            id: 1,
            name: "Stonehenge with Cathedral Tour",
            location: "Westminster Borough, London",
            rating: 4.7,
            reviews: 3014,
            price: 72,
            image: "/stonehenge.jpg"
        },
        {
            id: 2,
            name: "Majestic Mountains Expedition",
            location: "Rocky Mountains, Canada",
            rating: 4.9,
            reviews: 214,
            price: 120,
            image: "/rockies.jpg"
        },
        {
            id: 3,
            name: "Venice Gondola Experience",
            location: "Venice, Italy",
            rating: 4.5,
            reviews: 1587,
            price: 55,
            image: "/venice.jpg"
        },
        {
            id: 4,
            name: "Safari Adventure in Serengeti",
            location: "Serengeti National Park, Tanzania",
            rating: 4.8,
            reviews: 892,
            price: 230,
            image: "/safari.jpg"
        },
        {
            id: 5,
            name: "Eiffel Tower Summit Access",
            location: "Paris, France",
            rating: 4.6,
            reviews: 3241,
            price: 65,
            image: "/paris.jpg"
        },
        {
            id: 6,
            name: "Great Wall of China Hiking Tour",
            location: "Beijing, China",
            rating: 4.9,
            reviews: 1765,
            price: 110,
            image: "/great_wall.jpg"
        },
        {
            id: 7,
            name: "Northern Lights Viewing in Iceland",
            location: "Reykjavik, Iceland",
            rating: 4.7,
            reviews: 940,
            price: 150,
            image: "/northern_lights.jpg"
        },
        {
            id: 8,
            name: "Grand Canyon Helicopter Tour",
            location: "Arizona, USA",
            rating: 4.8,
            reviews: 1305,
            price: 299,
            image: "/canyon.jpg"
        },
        {
            id: 9,
            name: "Pyramids of Giza Tour",
            location: "Cairo, Egypt",
            rating: 4.7,
            reviews: 2210,
            price: 50,
            image: "/pyramids.jpg"
        },
        {
            id: 10,
            name: "Sydney Opera House Guided Tour",
            location: "Sydney, Australia",
            rating: 4.6,
            reviews: 1834,
            price: 40,
            image: "/sydney.jpg"
        }
    ]
    return (
        <div className="">
            <nav
                className="text-white p-4 flex justify-between fixed w-full z-50 transition-colors duration-300"
                ref={navRef}
            >
                <div className="flex items-center">
                    <div className="flex items-center mr-8">
                        <div className="w-24 mr-2">
                            <img
                                className="h-full w-full"
                                src="/logo_white.png"
                                alt="Palm Logo"
                            />
                        </div>
                    </div>
                    <ul className="gap-4 hidden md:flex">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/faq">FAQ</a>
                        </li>
                        <li>
                            <a href="/contactus">Contact Us</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <div className="md:hidden block">
                        <IconButton>
                            <Menu sx={{
                                color:"white"
                            }}/>
                        </IconButton>
                    </div>
                    <div className="hidden md:block">
                        <TransparentButton variant="contained">
                            Sign In / Register
                        </TransparentButton>
                    </div>
                </div>
            </nav>
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
                    <div className="pt-48 md:pt-80 w-auto md:w-1/2">
                        <h1 className="text-3xl md:text-6xl font-semibold tracking-tight mb-6 text-center">
                            Find Next Place To Visit
                        </h1>
                        <p className="text-center mb-16">
                            Discover amazing places at exclusive deals
                        </p>
                        <form>
                            <div className="h-35 md:h-20 p-2 w-full bg-white rounded-md md:rounded-full text-black flex flex-col md:flex-row">
                                <div className="basis-10/12 pl-8">
                                    <div className="text-sm font-medium">
                                        Location
                                    </div>
                                    <InputBase
                                        autoComplete="true"
                                        placeholder="Where are you going?"
                                        fullWidth
                                    />
                                </div>
                                <div className="basis-2/12">
                                    <RoundedButton
                                        type="submit"
                                        variant="contained"
                                    >
                                        Search
                                    </RoundedButton>
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
                                {popularDestinations.map((destination, index) => (
                                    <ExploreCard key={index} title={destination.name} image={destination.image} />
                                ))}
                            </Slider>
                        </div>
                    </div>
                    <div className="my-16 mt-28 h-full flex gap-8 flex-col md:flex-row">
                        <div className="md:basis-1/2 h-[300px] md:h-[550px]">
                            <LearningCard image={guides[0].image} title={guides[0].title} pretitle={guides[0].pretite}/>
                        </div>
                        <div className="md:basis-1/2 h-[300px] md:h-[550px]">
                            <LearningCard image={guides[1].image} title={guides[1].title} pretitle={guides[1].pretite} />
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
                            <Slider {...settings}>
                                {tours.map((tour, index) => (
                                    <TourCard key={tour.id} name={tour.name} location={tour.location} rating={tour.rating} reviews={tour.reviews} price={tour.price} image={tour.image} />
                                ))}
                            </Slider>
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
