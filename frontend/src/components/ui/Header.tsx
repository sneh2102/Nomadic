// author: Smit Patel
import { Menu } from "@mui/icons-material";
import {
    Box,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import TransparentButton from "./TransparentButton";
import { Link } from "react-router-dom";
import { displayPartsToString } from "typescript";
import { useNavigate } from 'react-router-dom';
import { getToken } from "../../utils/authUtils";

interface HeaderProps {
    showScrollAnimation?: boolean;
}

const Header = (props: HeaderProps) => {
    const [open, setOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const { userId } = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') as string) : ""
    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        navigate('/');
    };
    useEffect(() => {
        const token = getToken();
        setIsLoggedIn(!!token);
    }, []);
    const toggleDrawer = () => {
        setOpen((prev) => !prev);
    };
    const navRef = useRef<HTMLElement>(null);
    useEffect(() => {
        const nav = navRef.current;
        if (!!!props.showScrollAnimation) {
            nav?.classList.remove("bg-transparent");
            nav?.classList.add("bg-purple");
        }
        window.addEventListener("scroll", () => {
            if (!!props.showScrollAnimation) {
                if (window.scrollY > 100) {
                    nav?.classList.remove("bg-transparent");
                    nav?.classList.add("bg-purple");
                } else {
                    nav?.classList.add("bg-transparent");
                    nav?.classList.remove("bg-purple");
                }
            }
        });
    }, []);
    return (
        <nav
            className="fixed z-50 flex justify-between w-full p-4 text-white transition-colors duration-300 bg-transparent"
            ref={navRef}
        >
            <div className="flex items-center">
                <div className="flex items-center mr-8">
                    <div className="w-24 mr-2">
                        <Link to="/">
                            <img
                                className="w-full h-full"
                                src="/logo_white.png"
                                alt="Palm Logo"
                            />
                        </Link>
                    </div>
                </div>
                <ul className="hidden gap-4 md:flex">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/blogs">Blogs</Link>
                    </li>
                    <li>
                        <Link to="/wishlist">Bucket List</Link>
                    </li>
                    <li>
                        <Link to="/faq">FAQ</Link>
                    </li>
                    <li>
                        <Link to="/contactus">Contact Us</Link>
                    </li>

                </ul>
            </div>
            <div>
                <div className="block md:hidden">
                    <IconButton onClick={toggleDrawer}>
                        <Menu
                            sx={{
                                color: "white",
                            }}
                        />
                    </IconButton>
                </div>
                <div className="hidden md:block">
                    {isLoggedIn ? (<TransparentButton to="/" variant="contained" onClick={handleLogout}>
                        Logout
                    </TransparentButton>) : (
                        <TransparentButton to="/signup" variant="contained">
                            Sign In / Register
                        </TransparentButton>
                    )}
                </div>
                <Drawer open={open} onClose={toggleDrawer} anchor="right">
                    <Box sx={{ width: 250 }} role="presentation">
                        <List>
                            {[
                                {
                                    text: "Home",
                                    href: "/",
                                },
                                {
                                    text: "Blogs",
                                    href: "/blogs",
                                },
                                {
                                    text: "FAQ",
                                    href: "/faq",
                                },
                                {
                                    text: "Contact Us",
                                    href: "/contactus",
                                },
                                {
                                    text: "Manage Listings",
                                    href: "/manage",
                                },
                                {
                                    text: "History",
                                    href: `/history/${userId}`,
                                }
                            ].map((menu, index) => (
                                <ListItem key={menu.text} disablePadding>
                                    <Link
                                        to={menu.href}
                                        style={{
                                            display: "block",
                                            width: "100%",
                                        }}
                                    >
                                        <ListItemButton>
                                            <ListItemText primary={menu.text} />
                                        </ListItemButton>
                                    </Link>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Drawer>
            </div>
        </nav>
    );
};

export default Header;
