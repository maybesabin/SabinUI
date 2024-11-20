import { useLocation } from "react-router-dom"

const Introduction = () => {

    const location = useLocation();
    const path = location.pathname.split('/');
    const componentName = path[path.length - 1];
    return (
        <div className="flex flex-col items-start gap-4">
            <p className="capitalize flex items-center gap-3 text-muted-foreground text-xl font-medium"><span className="text-[0.85rem]">Components</span>{'>'} <span className="dark:text-white">{componentName}</span></p>
            <h1 className="capitalize font-semibold text-3xl">{componentName}</h1>
            <p className="text-[0.85rem] font-medium text-zinc-500 mb-6">A set of cool and responsive buttons that are used for different purposes.</p>
        </div>
    )
}

export default Introduction