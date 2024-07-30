import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FAQPage from "./pages/FAQPage";
import HomePage from "./pages/HomePage";
import ContactUsPage from "./pages/ContactUsPage";
import SearchPage from "./pages/SearchPage";
import ReviewForm from "./pages/ReviewForm";
import TourDetail from "./pages/TourDetail";
import HistoryPage from "./pages/HistoryPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ResetPassword from "./pages/ResetPassword";
import ScrollToTop from "./utils/ScrollToTop";
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
            <ToastContainer></ToastContainer>
                <Routes>
                    <Route path="/search" element={<SearchPage />} />
                    <Route path="/faq" element={<FAQPage />} />
                    <Route path="/" element={<HomePage />} />
                    <Route path="/manage" element={<Manage_Listing/>}/>
                    <Route path="/manage/add-tour" element={<AddTourPage/>} />
                    <Route path="/manage/plan-details/:id" element={<PlanDetails/>}/>
                    <Route path="/manage/create-package" element={<CreateTourPackage/>}/>
                    <Route path="/contactus" element={<ContactUsPage />} />
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/signup" element={<SignUpPage/>}/>
                    <Route path="/forgotpassword" element={<ForgotPasswordPage/>}/>
                    <Route path="/history/:id" element={<HistoryPage />} />
                    <Route path="/reviews" element={<ReviewForm />} />
                    <Route path="/tours/:id" element={<TourDetail />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignUpPage />} />
                    <Route path='/reset-password/:token' element={<ResetPassword />}></Route>
                    <Route path="/forgotpassword" element={<ForgotPasswordPage />} />
                </Routes>
            </Router>
            <Toaster />
        </ContextProvider>
        </div>
    );
}

export default App;
