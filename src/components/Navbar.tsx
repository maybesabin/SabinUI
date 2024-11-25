import { ModeToggle } from "./mode-toggle"
import { Input } from "./ui/input"
import logoDark from "../assets/images/logo-dark.png"
import logoLight from "../assets/images/logo-white.png"
import { useTheme } from "./theme-provider";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Sidebar from "./Sidebar";
import { Separator } from "./ui/separator";
import { Link } from "react-router-dom";

const Navbar = () => {
    const { theme } = useTheme();
    const [toggleNavbar, setToggleNavbar] = useState(false);
    return (
        <div className="w-full flex items-center justify-center fixed top-0 right-0 bg-background z-50">
            <div className="flex items-center justify-between xl:w-[95rem] w-full border px-4 py-2 lg:border-t-2 border-t-0">
                <div className="flex items-center gap-3">
                    <Menu onClick={() => setToggleNavbar(!toggleNavbar)} className="lg:hidden flex" />
                    <Link to={'/'}><img src={theme == "dark" ? logoLight : logoDark} className="lg:flex hidden cursor-pointer" width={'25px'} alt="" /></Link>
                    <h1 className="lg:flex cursor-pointer hidden text-lg mr-4 font-bold">
                        <Link to={'/'}>SabinUI</Link>
                    </h1>
                    <ul className="lg:flex hidden items-center font-medium gap-6">
                        <li className="text-sm text-muted-foreground hover:text-white cursor-pointer transition-all">Docs</li>
                        <li className="text-sm text-muted-foreground hover:text-white cursor-pointer transition-all">Components</li>
                    </ul>
                </div>
                <div className="flex items-center gap-2">
                    <Input className="lg:w-72 text-sm" placeholder="Search component..." />
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