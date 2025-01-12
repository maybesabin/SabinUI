import { createContext, useContext } from "react";
import { lazy, Suspense } from "react";
import { useParams } from "react-router-dom";
import { treadmill } from 'ldrs'
const Input = lazy(() => import("@/SabinUI/Inputs/Inputs"));
const Buttons = lazy(() => import("@/SabinUI/Buttons/Buttons"));
const Separator = lazy(() => import("@/SabinUI/Separator/Separator"));
const Skeletons = lazy(() => import("@/SabinUI/Skeleton/Skeletons"));
const Cards = lazy(() => import("@/SabinUI/Card/Cards"));
const BentoGrid = lazy(() => import("../SabinUI/Bento Grid/BentoGrid"));
const Modal = lazy(() => import("@/SabinUI/Modal/Modal"));
const Toasts = lazy(() => import("@/SabinUI/Toast/Toasts"));
const DarkMode = lazy(() => import("../SabinUI/Dark Mode/DarkMode"));

type ComponentMap = {
    [key: string]: JSX.Element;
};

const components: ComponentMap = {
    button: <Buttons />,
    input: <Input />,
    separator: <Separator />,
    card: <Cards />,
    skeleton: <Skeletons />,
    bentogrid: <BentoGrid />,
    modal: <Modal />,
    toast: <Toasts />,
    darkmode: <DarkMode />
};

const ComponentPage = () => {
    treadmill.register()
    const { componentName } = useParams<{ componentName?: string }>();

    if (!componentName || !components[componentName]) {
        return <div>Component not found</div>;
    }

    const Component = components[componentName];
    return (
        <Suspense fallback={<l-treadmill size="70" speed="1.25" color="white" />}>
            {Component}
        </Suspense>
    );
};

type GlobalContextType = {
    ComponentPage: () => JSX.Element;
};

//create context
const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

//create provider
const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
    return <GlobalContext.Provider value={{ ComponentPage }}>{children}</GlobalContext.Provider>;
};

export { GlobalContext, GlobalProvider, ComponentPage };

//custom hook
const useGlobalContext = () => {
    const context = useContext(GlobalContext);
    if (context === undefined) {
        throw new Error('useGlobalContext must be used within a GlobalProvider');
    }
    return context;
};

export { useGlobalContext };
