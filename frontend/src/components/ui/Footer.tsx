import { Divider } from "@mui/material";
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
const Footer = () => {
    return (
        <div className="container mx-auto">
            <div className="flex flex-col md:flex-row mx-8 md:mx-0">
                <div className="md:basis-4/12">
                    <div className="text-xl font-medium">Contact Us</div>
                    <ul className="md:my-6">
                        <li className="text-sm">Toll Free Customer Care</li>
                        <li className="text-primary font-semibold text-xl">
                            +(1) 123 456 7890
                        </li>
                        <li className="md:mt-6">Need live support?</li>
                        <li className="text-xl font-semibold text-primary">
                            hi@nomadic.com
                        </li>
                    </ul>
                </div>
                <div className="mt-8 md:mt-0 md:basis-4/12">
                    <div className="text-xl font-medium">Company</div>
                    <ul className="md:my-6">
                        <li className="mb-2"><a href="#">About Us</a></li>
                        <li className="mb-2"><a href="#">Blog</a></li>
                        <li className="mb-2"><a href="#">Careers</a></li>
                    </ul>
                </div>
                <div className="mt-8  md:mt-0 md:basis-4/12">
                    <div className="text-xl font-medium">Support</div>
                    <ul className="md:my-6">
                        <li className="mb-2"><a href="#">Terms and Conditions</a></li>
                        <li className="mb-2"><a href="#">Privacy Policy</a></li>
                        <li className="mb-2"><a href="#">Sitemap</a></li>
                    </ul>
                </div>
            </div>
            <Divider />
            <div className="py-6 flex justify-between mx-8 md:mx-0">
                <div>&copy; 2024 All rights reserved.</div>
                <div>
                    <LanguageOutlinedIcon />
                    <span className="ml-2">English</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;
