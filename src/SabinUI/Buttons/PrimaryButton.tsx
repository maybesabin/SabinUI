import { useTheme } from "@/components/theme-provider"
import { useState } from "react"
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight"
import { atomOneDark, atomOneLight } from "react-syntax-highlighter/dist/esm/styles/hljs"

const primaryButton = () => {
    const { theme } = useTheme();
    const [isActive, setIsActive] = useState("preview")
    const primaryButton = `<button className="border border-[#262626] px-5 py-2 rounded-full text-[0.9rem] dark:hover:bg-zinc-900 hover:bg-zinc-100 cursor-pointer transition-all">Click Me</button>`

    return (
        <div className="flex w-full flex-col items-start justify-start gap-6">

            <h1 className="text-2xl font-semibold">Primary Button</h1>

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
            <div className={`w-full border h-72 relative flex items-center justify-center rounded-lg`}>
                {
                    isActive == "preview" ? <button className="border border-[#262626] px-5 py-2 rounded-full text-[0.9rem] dark:hover:bg-zinc-900 hover:bg-[#f4f4f5] cursor-pointer transition-all">Click Me</button>

                        :
                        <>
                            <svg xmlns="http://www.w3.org/2000/svg" onClick={() => {
                                const updatedButton = primaryButton.replace("className", "class");
                                navigator.clipboard.writeText(updatedButton);
                            }}
                                className="cursor-pointer absolute right-6 top-6 hover:scale-105" viewBox="0 0 24 24" width="24" height="24" fill="none">
                                <title>Vanilla JS</title>
                                <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" />
                                <path d="M11.7324 12V16C11.7324 17.1046 10.837 18 9.73244 18C8.99215 18 8.34581 17.5978 8 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M18.4668 13C18.121 12.4022 17.4747 12 16.7344 12H16.2344C15.4059 12 14.7344 12.6716 14.7344 13.5C14.7344 14.3284 15.4059 15 16.2344 15H17.2344C18.0628 15 18.7344 15.6716 18.7344 16.5C18.7344 17.3284 18.0628 18 17.2344 18H16.7344C15.9941 18 15.3477 17.5978 15.0019 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" onClick={() => navigator.clipboard.writeText(primaryButton)} className="cursor-pointer absolute right-16 top-6 hover:scale-105" viewBox="0 0 24 24" width="24" height="24" fill="none">
                                <title>React JS</title>
                                <path d="M8.00001 12C8.00001 6.47715 9.79087 2 12 2C14.2091 2 16 6.47715 16 12C16 17.5228 14.2091 22 12 22C9.79087 22 8.00001 17.5228 8.00001 12Z" stroke="currentColor" strokeWidth="1.5" />
                                <path d="M9.97531 8.61921C14.8173 5.85779 19.649 5.17014 20.7673 7.08331C21.8855 8.99648 18.8667 12.786 14.0247 15.5474C9.18271 18.3088 4.35098 18.9965 3.23277 17.0833C2.11455 15.1701 5.13329 11.3806 9.97531 8.61921Z" stroke="currentColor" strokeWidth="1.5" />
                                <path d="M14.0247 8.61921C18.8667 11.3806 21.8855 15.1701 20.7673 17.0833C19.649 18.9965 14.8173 18.3088 9.97531 15.5474C5.13329 12.786 2.11455 8.99648 3.23277 7.08331C4.35098 5.17014 9.18271 5.85779 14.0247 8.61921Z" stroke="currentColor" strokeWidth="1.5" />
                                <path d="M13.5 12C13.5 12.8284 12.8284 13.5 12 13.5C11.1716 13.5 10.5 12.8284 10.5 12C10.5 11.1716 11.1716 10.5 12 10.5C12.8284 10.5 13.5 11.1716 13.5 12Z" stroke="currentColor" strokeWidth="1.5" />
                            </svg>
                            <div className="p-6 text-[0.85rem] w-[75%] overflow-x-hidden">
                                <SyntaxHighlighter language="javascript" style={theme == "dark" ? atomOneDark : atomOneLight} wrapLines={true} lineProps={{ style: { whiteSpace: 'pre-wrap' } }} customStyle={{
                                    whiteSpace: 'pre-wrap',
                                    padding: '15px',
                                    borderRadius: '7px',
                                    overflowX: 'hidden'
                                }}>
                                    {primaryButton}
                                </SyntaxHighlighter>
                            </div>
                        </>
                }
            </div>
        </div>
    )
}

export default primaryButton