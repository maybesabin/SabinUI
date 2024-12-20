

const HowToUse = () => {
    return (
        <div className="flex flex-col items-start gap-6">
            <h1 className="mt-6 md:text-2xl text-xl font-semibold text-white">
                1. Install Tailwind CSS (Required)
            </h1>
            <p className="text-xs md:text-[0.95rem] font-medium text-zinc-500 -mt-2">
                Our library is built on Tailwind CSS, making it a necessary dependency. If you haven't installed Tailwind CSS yet, follow the official installation guide: &nbsp;
            </p>


            <h1 className="md:text-2xl text-xl font-medium text-white mt-6">
                2. Choose your framework
            </h1>
            <h3 className="font-semibold md:text-lg text-[0.85rem]">Option A - Vanilla Javascript</h3>
            <ul className="flex flex-col items-start gap-2 text-xs md:text-[0.95rem] font-medium text-zinc-500">
                <li>- Configure Tailwind CSS to work seamlessly with your HTML files.</li>
                <li>- Import components into your project directly and use them in your HTML.</li>
                <li>- Replace the "className" attribute with "class" only.</li>
            </ul>

            <h3 className="font-semibold md:text-lg text-[0.85rem]">Option B - React JS</h3>
            <ul className="flex flex-col items-start gap-2 text-xs md:text-[0.95rem] font-medium text-zinc-500">
                <li>- Ensure your project is set up with React.</li>
                <li>- Configure Tailwind CSS to work seamlessly with your React project.</li>
                <li>- Import the desired components into your React application, ensuring Tailwind CSS is applied.</li>
            </ul>

            <p className="md:text-[0.9rem] text-xs text-zinc-200 mt-9">By following the steps above, you'll be able to seamlessly integrate our UI components into your project. For detailed examples and component usage, refer to the Components section.</p>
        </div>
    )
}

export default HowToUse