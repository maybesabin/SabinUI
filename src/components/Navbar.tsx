import { ModeToggle } from "./mode-toggle"
import { Input } from "./ui/input"
import logoDark from "../assets/images/logo-dark.png"
import logoLight from "../assets/images/logo-white.png"
import { useTheme } from "./theme-provider";
import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { Separator } from "./ui/separator";
import { Link, useNavigate } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/hooks/use-toast"

const Navbar = () => {
    const { theme } = useTheme();
    const [toggleNavbar, setToggleNavbar] = useState(false);
    const [searchQuery, setSearchQuery] = useState("")
    const navigate = useNavigate();
    const { toast } = useToast()

    //Search component
    const availableComponents = [
        "button",
        "input",
        "separator",
        "card",
        "skeleton",
        "bentogrid",
        "modal",
        "toast"
    ];

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const query = searchQuery.toLowerCase().replace(/\s+/g, "").trim();

        if (availableComponents.includes(query)) {
            navigate(`/components/${query}`)
        } else {
            toast({
                title: "Component not found.",
                description: "Please re-check the spelling or try again.",
            })
        }
        setSearchQuery("");
    }

    return (
        <div className="w-full flex items-center justify-center fixed top-0 right-0 bg-background z-50">
            <Toaster />
            <div className="flex items-center justify-between xl:w-[95rem] w-full border px-4 py-2 lg:border-t-2 lg:border-l-2 border-l-0 lg:border-r-2 border-r-0 border-t-0">
                <div className="flex items-center gap-3">
                    <Menu onClick={() => setToggleNavbar(!toggleNavbar)} className="lg:hidden flex" />
                    <Link to={'/'}><img src={theme == "dark" ? logoLight : logoDark} className="lg:flex hidden cursor-pointer" width={'25px'} alt="" /></Link>
                    <h1 className="lg:flex cursor-pointer hidden text-lg mr-4 font-bold">
                        <Link to={'/'}>SabinUI</Link>
                    </h1>
                    <ul className="lg:flex hidden items-center font-medium gap-6">
                        <li className="text-sm text-muted-foreground hover:text-black dark:hover:text-white cursor-pointer transition-all">
                            <Link to={'/'}>Docs</Link>
                        </li>
                        <li className="text-sm text-muted-foreground hover:text-black dark:hover:text-white cursor-pointer transition-all">
                            <Link to={'/components/bentogrid'}>Components</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center gap-2">
                    <form onSubmit={handleSearch}>
                        <Input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="lg:w-72 text-sm" placeholder="Search component..." />
                    </form>
                    <ModeToggle />
                </div>
            </div>

            {/* Mobile Navbar  */}
            <div className={`h-screen bg-black/40 backdrop-blur-md fixed top-0 left-0 w-full ${toggleNavbar ? "translate-y-0" : "translate-y-full"} transform transition-transform duration-500 ease-in-out flex flex-col items-center justify-center gap-6`}
            >
                <X onClick={() => setToggleNavbar(!toggleNavbar)} className="lg:hidden absolute top-4 left-4" />
                <Separator className="absolute top-14 w-full" />
                <Sidebar />
            </div>

        </div>
    )
}

export default Navbar