import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { FileJson2, Boxes, Workflow } from "lucide-react";

const HowToUse = () => {
    return (
        <div className="w-full max-w-3xl py-4">
            <div className="space-y-8">
                {/* Section 1 */}
                <Card className="p-6 bg-zinc-900/50 border-zinc-800">
                    <div className="flex items-center gap-3">
                        <FileJson2 className="w-6 h-6 text-blue-500" />
                        <h2 className="text-2xl font-semibold text-white">Install Tailwind CSS</h2>
                    </div>
                    <p className="mt-4 text-zinc-400 leading-relaxed">
                        Our library is built on Tailwind CSS, making it a necessary dependency. Follow the official installation guide to get started.
                    </p>
                </Card>

                {/* Section 2 */}
                <div className="space-y-6">
                    <div className="flex items-center gap-3">
                        <Workflow className="w-6 h-6 text-purple-500" />
                        <h2 className="text-2xl font-semibold text-white">Choose your framework</h2>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                        {/* Vanilla JS Option */}
                        <Card className="p-6 bg-zinc-900/50 border-zinc-800">
                            <h3 className="flex items-center gap-2 text-lg font-medium text-white">
                                <Boxes className="w-5 h-5 text-amber-500" />
                                Vanilla JavaScript
                            </h3>
                            <Separator className="my-4 bg-zinc-800" />
                            <ul className="space-y-3 text-sm text-zinc-400">
                                <li className="flex items-start gap-2">
                                    • Configure Tailwind CSS with HTML files
                                </li>
                                <li className="flex items-start gap-2">
                                    • Import components directly
                                </li>
                                <li className="flex items-start gap-2">
                                    • Use "class" instead of "className"
                                </li>
                            </ul>
                        </Card>

                        {/* React Option */}
                        <Card className="p-6 bg-zinc-900/50 border-zinc-800">
                            <h3 className="flex items-center gap-2 text-lg font-medium text-white">
                                <svg className="w-5 h-5 text-sky-500" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" />
                                    <path d="M12 22.5c-1.9 0-3.6-.4-4.9-1.1-1.5-.8-2.4-1.9-2.7-3.2-.3-1.3.1-2.7 1.1-4.2.9-1.4 2.3-2.8 4.2-4-1.9-1.2-3.3-2.6-4.2-4-.9-1.4-1.4-2.9-1.1-4.2.3-1.3 1.2-2.4 2.7-3.2C8.4 1.9 10.1 1.5 12 1.5c1.9 0 3.6.4 4.9 1.1 1.5.8 2.4 1.9 2.7 3.2.3 1.3-.1 2.7-1.1 4.2-.9 1.4-2.3 2.8-4.2 4 1.9 1.2 3.3 2.6 4.2 4 .9 1.4 1.4 2.9 1.1 4.2-.3 1.3-1.2 2.4-2.7 3.2-1.3.7-3 1.1-4.9 1.1Zm0-2c1.5 0 2.9-.3 4-.8 1.1-.6 1.8-1.3 2-2.1.2-.8-.1-1.8-.8-2.9-.8-1.2-2-2.4-3.7-3.4l-1.5-.9-1.5.9c-1.7 1-2.9 2.2-3.7 3.4-.7 1.1-1 2.1-.8 2.9.2.8.9 1.5 2 2.1 1.1.5 2.5.8 4 .8ZM8 8.2c-.7 1.1-1 2.1-.8 2.9.2.8.9 1.5 2 2.1 1.1.6 2.5.8 4 .8 1.5 0 2.9-.3 4-.8 1.1-.6 1.8-1.3 2-2.1.2-.8-.1-1.8-.8-2.9-.8-1.2-2-2.4-3.7-3.4l-1.5-.9-1.5.9C10 5.8 8.8 7 8 8.2Z" />
                                </svg>
                                React
                            </h3>
                            <Separator className="my-4 bg-zinc-800" />
                            <ul className="space-y-3 text-sm text-zinc-400">
                                <li className="flex items-start gap-2">
                                    • Set up a React project
                                </li>
                                <li className="flex items-start gap-2">
                                    • Configure Tailwind CSS integration
                                </li>
                                <li className="flex items-start gap-2">
                                    • Import and use components directly
                                </li>
                            </ul>
                        </Card>
                    </div>
                </div>

                <p className="text-sm text-zinc-400 bg-zinc-900/30 p-4 rounded-lg border border-zinc-800">
                    By following these steps, you'll be able to seamlessly integrate our UI components into your project.
                    For detailed examples and component usage, refer to the Components section.
                </p>
            </div>
        </div>
    );
};

export default HowToUse;