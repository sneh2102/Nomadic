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



function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/search" element={<SearchPage />} />
                    <Route path="/faq" element={<FAQPage />} />
                    <Route path="/" element={<HomePage />} />
                    <Route path="/contactus" element={<ContactUsPage />} />
                    <Route path="/history/:id" element={<HistoryPage />} />
                    <Route path="/reviews" element={<ReviewForm/>} />
                    <Route path="/tours/:id" element={<TourDetail />} />
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/signup" element={<SignUpPage/>}/>
                    <Route path='/reset-password/:token' element={<ResetPassword/>}></Route>
                    <Route path="/forgotpassword" element={<ForgotPasswordPage/>}/>
                </Routes>
                <ToastContainer />
            </Router>
        </div>
    );
}

export default App;
