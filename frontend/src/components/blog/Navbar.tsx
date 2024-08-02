import { Button } from "@mui/material";

const Header = () => {
    return (
        <div className="p-4 flex justify-between bg-primary bg-blue-950">
            <div>
                <div className="flex items-center">
                    <div className="text-2xl text-white font-semibold mr-6">
                        Tripsy
                    </div>
                    <ul className="flex gap-4">
                        <li>
                            <a className="text-white" href="/">Home</a>
                        </li>
                        <li>
                            <a className="text-white" href="/blog">Blog</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <Button color={"primary"} variant="contained">
                    Sign In / Register
                </Button>
            </div>
        </div>
    );
};

export default Header;