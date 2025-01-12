import { ModeToggle } from "./mode-toggle"
import logoDark from "../assets/images/logo-dark.png"
import logoLight from "../assets/images/logo-white.png"
import { useTheme } from "./theme-provider";
import { Menu, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { Separator } from "./ui/separator";
import { Link, useNavigate } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/hooks/use-toast"
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "../components/ui/command"
import { DialogTitle } from "@/components/ui/dialog"

const Navbar = () => {
    const { theme } = useTheme();
    const [toggleNavbar, setToggleNavbar] = useState(false);
    const [searchQuery, setSearchQuery] = useState("")
    const navigate = useNavigate();
    const { toast } = useToast()
    const [filteredComponents, setFilteredComponents] = useState<string[]>([]);

    const [openCommand, setOpenCommand] = useState(false)

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpenCommand(!openCommand)
            }
        }
        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [])

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

    const handlePartialMatch = (query: string) => {
        const filtered = availableComponents.filter(component =>
            component.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredComponents(filtered);
    };

    useEffect(() => {
        handlePartialMatch(searchQuery);
    }, [searchQuery]);

    const handleNavigation = (component: string) => {
        navigate(`/docs/components/${component}`);
        setOpenCommand(false);
        setSearchQuery("");
    };

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (filteredComponents.length > 0) {
            handleNavigation(filteredComponents[0]);
        } else {
            toast({
                title: "Component not found.",
                description: "Please re-check the spelling or try again.",
            });
        }
    };

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
                            <Link to={'/docs/components/bentogrid'}>Components</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center gap-2">
                    <div
                        onClick={() => setOpenCommand(!openCommand)}
                        className='flex items-center gap-2 border pr-1 pl-4 py-[0.2rem] rounded-lg cursor-pointer dark:bg-neutral-900 group dark:group-hover:bg-neutral-400 transition-all'>
                        <input
                            readOnly
                            type="text"
                            placeholder='Search components...'
                            className='border-none cursor-pointer md:text-sm text-xs outline-none bg-transparent w-52 placeholder-zinc-500 dark:group-hover:placeholder-zinc-200 hover:placeholder-zinc-800 transition-all' />
                        <div className='border dark:bg-neutral-900 bg-neutral-100 rounded-lg px-1'>
                            <span className='text-xs text-zinc-500 dark:group-hover:text-zinc-200 group-hover:text-zinc-800  transition-all'>⌘&nbsp;</span>
                            <span className='text-xs text-zinc-500 dark:group-hover:text-zinc-200 group-hover:text-zinc-800  transition-all'>K</span>
                        </div>
                    </div>
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

            {/* Search Box Popup */}
            <form onSubmit={handleSearch}>
                <CommandDialog open={openCommand} onOpenChange={setOpenCommand}>
                    <DialogTitle className="sr-only">Search components</DialogTitle>
                    <CommandInput
                        value={searchQuery}
                        onValueChange={setSearchQuery}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" && filteredComponents.length > 0) {
                                e.preventDefault();
                                handleNavigation(filteredComponents[0]);
                            }
                        }}
                        placeholder="Search components..." />
                    <CommandList>
                        <CommandEmpty>No results found.</CommandEmpty>
                        <CommandGroup heading="Suggestions">
                            {filteredComponents.map((component) => (
                                <CommandItem
                                    onSelect={() => handleNavigation(component)}
                                    key={component}>
                                    {component}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </CommandDialog>
            </form>
        </div>
    )
}

export default Navbar