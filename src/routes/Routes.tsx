import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import App from "@/App";
import Input from "@/SabinUI/Inputs/Inputs";
import Buttons from "@/SabinUI/Buttons/Buttons";
import Introduction from "@/Introduction";
import HowToUse from "@/HowToUse";

type ComponentMap = {
    [key: string]: JSX.Element;
};


const components: ComponentMap = {
    button: <Buttons />,
    input: <Input />,
};


const ComponentPage = () => {
    const { componentName } = useParams<{ componentName?: string }>();

    if (!componentName || !components[componentName]) {
        return <div>Component not found</div>;
    }

    const Component = components[componentName];
    return Component;
};

// Main routes configuration
const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<div>Home</div>} />
                    <Route path="/introduction" element={<Introduction />} />
                    <Route path="/howtouse" element={<HowToUse />} />
                    <Route path="/components/:componentName" element={<ComponentPage />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default AppRoutes;
