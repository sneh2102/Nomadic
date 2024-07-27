import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FAQPage from "./pages/FAQPage";
import HomePage from "./pages/HomePage";
import ContactUsPage from "./pages/ContactUsPage";
import SearchPage from "./pages/SearchPage";
import ReviewForm from "./pages/reviews";
import ReviewList from "./pages/reviewget";
import TourDetail from "./pages/TourDetail";

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/search" element={<SearchPage />} />
                    <Route path="/faq" element={<FAQPage />} />
                    <Route path="/" element={<HomePage />} />
                    <Route path="/contactus" element={<ContactUsPage />} />
                    <Route path="/reviews" element={<ReviewForm />} />
                    <Route path="/getreviews" element={<ReviewList />} />
                    <Route path="/tours/:id" element={<TourDetail />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
