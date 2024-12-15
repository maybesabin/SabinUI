import { useLocation } from "react-router-dom";

const Description = () => {
    const location = useLocation();
    const path = location.pathname.split('/');
    let componentName: string;

    if (path[path.length - 1] === "howtouse") {
        componentName = "How to use?";
    } else if (path[path.length - 1] === "") {
        componentName = "Introduction";
    } else if (path[path.length - 1] === "bentogrid") {
        componentName = "Bento Grid";

    } else if (path[path.length - 1] === "darkmode") {
        componentName = "Dark Mode";
    }
    else {
        componentName = path[path.length - 1]?.replace(/-/g, ' ') || "Home";
    }

    return (
        <div className="flex flex-col items-start gap-4">
            <p className="capitalize flex items-center gap-3 text-muted-foreground text-xs md:text-xl font-medium">
                <span className="text-[0.85rem]">Components</span>{'>'}{' '}
                <span className="dark:text-white">{componentName}</span>
            </p>
            <h1 className="capitalize font-semibold text-3xl">{componentName}</h1>
        </div>
    );
};

export default Description;
