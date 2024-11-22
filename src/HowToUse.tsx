

const HowToUse = () => {
    return (
        <div className="flex flex-col items-start gap-6">
            <h1 className="mt-6 text-2xl font-semibold text-white">
                1. Install Tailwind CSS (Required)
            </h1>
            <p className="text-[0.95rem] font-medium text-zinc-500 -mt-2">
                Our library is built on Tailwind CSS, making it a necessary dependency. If you haven't installed Tailwind CSS yet, follow the official installation guide: &nbsp;
            </p>
            <a href="https://tailwindcss.com/docs/installation" target="_blank" className="hover:underline text-zinc-200">👉 Tailwind CSS Installation Guide</a>


            <h1 className="text-2xl font-medium text-white mt-6">
                2. Choose your framework
            </h1>
            <h3 className="font-semibold text-lg ml-4">Option A - Vanilla Javascript</h3>
            <ul className="flex flex-col items-start gap-2 ml-8 text-zinc-400">
                <li>- Add the necessary script and style files for your project.</li>
                <li>- Configure Tailwind CSS to work seamlessly with your HTML files.</li>
                <li>- Import components into your project directly and use them in your HTML.</li>
            </ul>

            <h3 className="font-semibold text-lg ml-4">Option B - React JS</h3>
            <ul className="flex flex-col items-start gap-2 ml-8 text-zinc-400">
                <li>- Ensure your project is set up with React.</li>
                <li>- Install the Shadcn UI library for advanced React components.</li>
                <li className="ml-3">
                    <a href="https://ui.shadcn.com/docs/installation" target="_blank" className="hover:underline text-zinc-200">
                        👉 Shadcn UI Documentation</a>
                </li>
                <li>- Import the desired components into your React application, ensuring Tailwind CSS is applied.</li>
            </ul>

            <p className="text-[0.95rem] font-medium text-zinc-200 mt-9">By following the steps above, you'll be able to seamlessly integrate our UI components into your project. For detailed examples and component usage, refer to the Components section.</p>
        </div>
    )
}

export default HowToUse