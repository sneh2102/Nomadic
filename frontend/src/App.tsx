import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FAQPage from "./pages/FAQPage";
import HomePage from "./pages/HomePage";
import ContactUsPage from "./pages/ContactUsPage";
function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/faq" element={<FAQPage />} />
                    <Route path="/" element={<HomePage />} />
                    <Route path="/contactus" element={<ContactUsPage />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
