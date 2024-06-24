import { Button, Divider, InputBase } from "@mui/material";
import TransparentButton from "./ui/TransparentButton";
import { useEffect, useRef } from "react";
import RoundedButton from "./ui/RoundedButton";
import ExploreCard from "./ui/ExploreCard";

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
    return (
        <div className="">
            <nav
                className="text-white p-4 flex justify-between fixed w-full z-50 transition-colors duration-300"
                ref={navRef}
            >
                <div className="flex items-center">
                    <div className="flex items-center mr-8">
                        <div className="bg-white rounded-xl w-12 mr-2">
                            <img
                                className="h-full w-full"
                                src="/palm_logo.svg"
                                alt="Palm Logo"
                            />
                        </div>
                        <h1 className="text-xl">NoMadic</h1>
                    </div>
                    <ul className="flex gap-4">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Tours</a>
                        </li>
                        <li>
                            <a href="#">Blogs</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <TransparentButton variant="contained">
                        Sign In / Register
                    </TransparentButton>
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
                    <div className="pt-80 w-1/2  ">
                        <h1 className="text-6xl font-semibold tracking-tight mb-6 text-center">Find Next Place To Visit</h1>
                        <p className="text-center mb-16">Discover amazing places at exclusive deals</p>
                        <form>
                            <div className="h-20 p-2 w-full bg-white rounded-full text-black flex">
                                <div className="basis-10/12 pl-8">
                                    <div className="text-sm font-medium">Location</div>
                                    <InputBase autoComplete="true" placeholder="Where are you going?" fullWidth/>
                                </div>
                                <div className="basis-2/12">
                                    <RoundedButton type="submit" variant="contained">Search</RoundedButton>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div>
                <div className="container mx-auto">
                    <div className="py-16 pt-32">
                        <h2 className="text-3xl font-medium tracking-tighter">Popular Destinations</h2>
                        <p>These popular destinations have a lot to offer</p>
                        <div>
                            <ExploreCard />
                            <ExploreCard />
                            <ExploreCard />
                            <ExploreCard />
                            <ExploreCard />
                            <ExploreCard />
                            <ExploreCard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
