import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FAQPage from "./pages/FAQPage";
import HomePage from "./pages/HomePage";
import ContactUsPage from "./pages/ContactUsPage";
import SearchPage from "./pages/SearchPage";
import { ContextProvider } from "./Context/Context";
import { Toaster } from "react-hot-toast";
import { Box } from "@mui/material";
import Manage_Listing from "./pages/Manger_Dashboard/Manage_Listing";
import AddTourPage from "./pages/Manger_Dashboard/Add_Tours";
import PlanDetails from "./pages/Manger_Dashboard/Plan_Details_Page";
import CreateTourPackage from "./pages/Manger_Dashboard/CreateTourCategory";

function App() {
    return (
        <div>
        <ContextProvider>
            <Router>
            {/* <Box sx={{display: "flex" }}> */}
                <Routes>
                    <Route path="/search" element={<SearchPage />} />
                    <Route path="/faq" element={<FAQPage />} />
                    <Route path="/" element={<HomePage />} />
                    <Route path="/manage" element={<Manage_Listing/>}/>
                    <Route path="/manage/add-tour" element={<AddTourPage/>} />
                    <Route path="/manage/plan-details/:id" element={<PlanDetails/>}/>
                    <Route path="/contactus" element={<ContactUsPage />} />
                    <Route path="/manage/create-package" element={<CreateTourPackage/>} />
                </Routes>
            {/* </Box> */}
            </Router>
            <Toaster />
        </ContextProvider>
        </div>
    );
}

export default App;
