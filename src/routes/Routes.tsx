import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "@/App";
import Introduction from "@/Introduction";
import HowToUse from "@/HowToUse";
import { ComponentPage } from "../context/globalContext";
import LandingPage from "../pages/LandingPage";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/docs" element={<App />}>
                    <Route index element={<Introduction />} />
                    <Route path="howtouse" element={<HowToUse />} />
                    <Route path="components/:componentName" element={<ComponentPage />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default AppRoutes;