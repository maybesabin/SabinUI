import { useTheme } from "@/components/theme-provider"
import { useState } from "react"
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight"
import { atomOneDark, atomOneLight } from "react-syntax-highlighter/dist/esm/styles/hljs"
import { Check, Clipboard } from "lucide-react"

const BasicModal = () => {
    const { theme } = useTheme();
    const [isActive, setIsActive] = useState("preview")
    const [isCopied, setIsCopied] = useState(false);
    const handleClick = () => {
        navigator.clipboard.writeText(BasicModal)
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 2000)
    }
    const BasicModal =
        `
    <div className="relative">
                            <input type="checkbox" id="modal-toggle" className="hidden peer" />

                            <label
                                htmlFor="modal-toggle"
                                className="border px-5 py-2 rounded-full text-[0.9rem] dark:hover:bg-zinc-900 hover:bg-zinc-100 cursor-pointer transition-all"
                            >
                                Open Modal
                            </label>

                            <div className="fixed inset-0 hidden peer-checked:flex dark:bg-black bg-white dark:bg-opacity-75 bg-opacity-90 items-center justify-center z-50">
                                <div className="flex flex-col items-start gap-4 rounded-lg border p-6 dark:bg-black bg-opacity-75">
                                    <h2 className="text-xl font-semibold mb-4">Modal Title</h2>
                                    <p className="text-gray-400 mb-6">This is a basic modal using Tailwind CSS.</p>
                                    <div className="flex items-center gap-2">
                                        <button className="border px-5 py-2 rounded-lg text-[0.9rem] dark:hover:bg-zinc-900 hover:bg-zinc-100 cursor-pointer transition-all">
                                            Confirm
                                        </button>
                                        <label
                                            htmlFor="modal-toggle"
                                            className="border px-5 py-2 rounded-lg text-[0.9rem] bg-zinc-700 text-white dark:bg-zinc-200 dark:text-black hover:bg-zinc-900 dark:hover:bg-zinc-50 cursor-pointer transition-all"
                                        >
                                            Cancel
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
    `

    return (
        <div className="flex w-full flex-col items-start justify-start gap-6">
            <h1 className="text-2xl font-semibold">Basic Modal</h1>

            <div className="flex items-center gap-4">
                <div onClick={() => setIsActive("preview")} className={`${isActive == "preview" ? "dark:bg-zinc-900 bg-zinc-100" : ""} flex items-center gap-3 border rounded-lg px-4 py-2 dark:hover:bg-zinc-900 hover:bg-zinc-200 transition-all cursor-pointer`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="17" height="17" fill="none">
                        <path d="M21.544 11.045C21.848 11.4713 22 11.6845 22 12C22 12.3155 21.848 12.5287 21.544 12.955C20.1779 14.8706 16.6892 19 12 19C7.31078 19 3.8221 14.8706 2.45604 12.955C2.15201 12.5287 2 12.3155 2 12C2 11.6845 2.15201 11.4713 2.45604 11.045C3.8221 9.12944 7.31078 5 12 5C16.6892 5 20.1779 9.12944 21.544 11.045Z" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12Z" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                    <h3 className="font-medium text-[0.85rem]">Preview</h3>
                </div>
                <div onClick={() => setIsActive("code")} className={`${isActive == "code" ? "dark:bg-zinc-900 bg-zinc-100" : ""} flex items-center gap-3 border rounded-lg pr-6 pl-4 py-2 dark:hover:bg-zinc-900 hover:bg-zinc-200 transition-all cursor-pointer`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="17" height="17" fill="none">
                        <path d="M3 6C3 4.58579 3 3.87868 3.43934 3.43934C3.87868 3 4.58579 3 6 3C7.41421 3 8.12132 3 8.56066 3.43934C9 3.87868 9 4.58579 9 6C9 7.41421 9 8.12132 8.56066 8.56066C8.12132 9 7.41421 9 6 9C4.58579 9 3.87868 9 3.43934 8.56066C3 8.12132 3 7.41421 3 6Z" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M3 18C3 16.5858 3 15.8787 3.43934 15.4393C3.87868 15 4.58579 15 6 15C7.41421 15 8.12132 15 8.56066 15.4393C9 15.8787 9 16.5858 9 18C9 19.4142 9 20.1213 8.56066 20.5607C8.12132 21 7.41421 21 6 21C4.58579 21 3.87868 21 3.43934 20.5607C3 20.1213 3 19.4142 3 18Z" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M3 12L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 3V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M15 6C15 4.58579 15 3.87868 15.4393 3.43934C15.8787 3 16.5858 3 18 3C19.4142 3 20.1213 3 20.5607 3.43934C21 3.87868 21 4.58579 21 6C21 7.41421 21 8.12132 20.5607 8.56066C20.1213 9 19.4142 9 18 9C16.5858 9 15.8787 9 15.4393 8.56066C15 8.12132 15 7.41421 15 6Z" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M21 12H15C13.5858 12 12.8787 12 12.4393 12.4393C12 12.8787 12 13.5858 12 15M12 17.7692V20.5385M15 15V16.5C15 17.9464 15.7837 18 17 18C17.5523 18 18 18.4477 18 19M16 21H15M18 15C19.4142 15 20.1213 15 20.5607 15.44C21 15.8799 21 16.5881 21 18.0043C21 19.4206 21 20.1287 20.5607 20.5687C20.24 20.8898 19.7767 20.9766 19 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    <h3 className="font-medium text-[0.85rem]">Code</h3>
                </div>
            </div>
            <div className={`w-full border min-h-72 py-6 relative flex items-center justify-center rounded-lg`}>
                {
                    isActive == "preview" ?
                        <div className="relative">
                            <input type="checkbox" id="modal-toggle" className="hidden peer" />

                            <label
                                htmlFor="modal-toggle"
                                className="border px-5 py-2 rounded-full text-[0.9rem] dark:hover:bg-zinc-900 hover:bg-zinc-100 cursor-pointer transition-all"
                            >
                                Open Modal
                            </label>

                            <div className="fixed inset-0 hidden peer-checked:flex dark:bg-black bg-white dark:bg-opacity-75 bg-opacity-90 items-center justify-center z-50">
                                <div className="flex flex-col items-start gap-4 max-w-80 rounded-lg border p-6 dark:bg-black bg-opacity-75">
                                    <h2 className="text-xl font-semibold">Hey there !</h2>
                                    <p className="text-gray-400 text-[0.85rem] mb-2">Will you follow @16calc on twitter?</p>

                                    <label
                                        htmlFor="modal-toggle"
                                        className="border px-4 py-2 rounded-lg text-[0.8rem] bg-zinc-700 text-white dark:bg-zinc-200 dark:text-black hover:bg-zinc-900 dark:hover:bg-zinc-50 cursor-pointer transition-all"
                                    >
                                        Accept
                                    </label>
                                </div>
                            </div>
                        </div>

                        :
                        <>
                            {!isCopied ? <Clipboard onClick={handleClick} className="cursor-pointer w-4 h-4 absolute right-6 top-6 hover:scale-105" />
                                :
                                <Check className="cursor-pointer w-4 h-4 absolute right-6 top-6 hover:scale-105" />}
                            <div className="p-6 text-[0.85rem] w-auto overflow-x-hidden">
                                <SyntaxHighlighter language="javascript" style={theme == "dark" ? atomOneDark : atomOneLight} wrapLines={true} lineProps={{ style: { whiteSpace: 'pre-wrap' } }} customStyle={{
                                    whiteSpace: 'pre-wrap',
                                    padding: '15px',
                                    borderRadius: '7px',
                                    overflowX: 'hidden'
                                }}>
                                    {BasicModal}
                                </SyntaxHighlighter>
                            </div>
                        </>
                }
            </div>
        </div >
    )
}

export default BasicModal