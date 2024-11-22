import { Link } from "react-router-dom"

const Sidebar = () => {
    return (
        <div className='min-h-[100vh] pl-12 flex flex-col items-start gap-6 md:w-1/5 p-6'>
            <div className="flex flex-col items-start gap-6 fixed">
                <div className="flex flex-col items-start gap-3">
                    <h1 className='text-[1rem] font-semibold'>Sidebar</h1>
                    <ul className="flex flex-col text-[0.85rem] items-start gap-2">
                        <li className="hover:underline cursor-pointer"><Link to={"/introduction"}>Introduction</Link></li>
                        <li className="hover:underline cursor-pointer"><Link to={"/howtouse"}>How to use?</Link></li>
                    </ul>
                </div>

                <div className="flex flex-col items-start gap-3">
                    <h1 className='text-[1rem] font-semibold'>Components</h1>
                    <ul className="flex flex-col text-[0.85rem] items-start gap-2">
                        <li className="hover:underline cursor-pointer"><Link to={"/components/button"}>Button</Link></li>
                        <li className="hover:underline cursor-pointer"><Link to={"/components/input"}>Input</Link></li>
                        <li className="hover:underline cursor-pointer"><Link to={"/components/navbar"}>Navbar</Link></li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Sidebar