import { Link } from "react-router-dom"

const Sidebar = () => {

    const components = ['button', 'input', 'separator', 'card', 'skeleton']
    const sortedComponents = components.sort();

    return (
        <div className='md:min-h-[100vh] h-full md:pt-6 pt-[5rem] md:pl-12 flex flex-col items-start justify-start gap-6 md:w-1/5 w-full p-6'>
            <div className="flex flex-col items-start gap-6 fixed">
                <div className="flex flex-col items-start gap-3">
                    <h1 className='text-[1rem] font-semibold'>Sidebar</h1>
                    <ul className="flex flex-col text-[0.85rem] items-start gap-2">
                        <li className="hover:underline cursor-pointer"><Link to={"/"}>Introduction</Link></li>
                        <li className="hover:underline cursor-pointer"><Link to={"/howtouse"}>How to use?</Link></li>
                    </ul>
                </div>

                <div className="flex flex-col items-start gap-3">
                    <h1 className='text-[1rem] font-semibold'>Components</h1>
                    <ul id="sidebar" className="flex flex-col text-[0.85rem] items-start gap-2">
                        {sortedComponents.map((item, idx) => (
                            <li key={idx}><Link to={`/components/${item}`}>{item}</Link></li>
                        ))}
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Sidebar