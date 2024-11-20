import { ModeToggle } from "./mode-toggle"
import { Input } from "./ui/input"
import logoDark from "../assets/images/logo-dark.png"
import logoLight from "../assets/images/logo-white.png"
import { useTheme } from "./theme-provider";

const Navbar = () => {
    const { theme } = useTheme();

    return (
        <div className="w-full flex items-center justify-center fixed top-0 right-0 bg-background z-50">
            <div className="flex items-center justify-between xl:w-[95rem] w-full border px-4 py-2">
                <div className="flex items-center gap-3">
                    <img src={theme == "dark" ? logoLight : logoDark} width={'25px'} alt="" />
                    <h1 className="text-lg mr-4 font-bold">SabinUI</h1>
                    <ul className="flex items-center font-medium gap-6">
                        <li className="text-sm text-muted-foreground hover:text-white cursor-pointer transition-all">Docs</li>
                        <li className="text-sm text-muted-foreground hover:text-white cursor-pointer transition-all">Components</li>
                    </ul>
                </div>
                <div className="flex items-center gap-2">
                    <Input className="w-72" placeholder="Search component..." />
                    <ModeToggle />
                </div>
            </div>
        </div>
    )
}

export default Navbar