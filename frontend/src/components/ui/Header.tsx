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

interface HeaderProps {
    showScrollAnimation?: boolean;
}

const Header = (props: HeaderProps) => {
    const [open, setOpen] = useState(false);

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
            className="bg-transparent text-white p-4 flex justify-between fixed w-full z-50 transition-colors duration-300"
            ref={navRef}
        >
            <div className="flex items-center">
                <div className="flex items-center mr-8">
                    <div className="w-24 mr-2">
                        <Link to="/">
                            <img
                                className="h-full w-full"
                                src="/logo_white.png"
                                alt="Palm Logo"
                            />
                        </Link>
                    </div>
                </div>
                <ul className="gap-4 hidden md:flex">
                    <li>
                        <Link to="/">Home</Link>
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
                <div className="md:hidden block">
                    <IconButton onClick={toggleDrawer}>
                        <Menu
                            sx={{
                                color: "white",
                            }}
                        />
                    </IconButton>
                </div>
                <div className="hidden md:block">
                    <TransparentButton to="/signup" variant="contained">
                        Sign In / Register
                    </TransparentButton>
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
