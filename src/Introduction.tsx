import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


const Introduction = () => {

    const faqs = [
        {
            question: "What is SabinUI?",
            answer: "SabinUI is a lightweight, customizable, and developer-friendly UI component library designed to accelerate frontend development."
        },
        {
            question: "How do I install SabinUI?",
            answer: "You do not need to install SabinUI through a package. You can simply copy the code snippet and paste it in your project."
        },
        {
            question: "Is SabinUI compatible with React and TypeScript?",
            answer: "Yes, SabinUI is fully compatible with React and TypeScript, providing type definitions for all components to ensure a seamless development experience."
        },
        {
            question: "Does SabinUI support dark mode?",
            answer: "Absolutely! SabinUI has built-in support for both dark and light modes, and components can adapt dynamically based on your app's theme."
        },
        {
            question: "Can I customize SabinUI components?",
            answer: "Yes, all components in SabinUI are highly customizable using utility classes like TailwindCSS or by overriding their styles."
        },
        {
            question: "Is SabinUI free to use?",
            answer: "Yes, SabinUI is completely free to use."
        },
    ];


    return (
        <div className="flex flex-col items-start gap-6">
            <p className="text-xs md:text-[0.95rem] font-medium text-zinc-500">
                Easy, modern, lightweight tailwind components that is supported for both react and vanilla javascript.
            </p>
            <p className="text-[0.85rem] md:text-[0.95rem] font-medium text-white">
                This is a collection of reusable components that will fasten your development process.
            </p>

            <div className="flex flex-col items-start mt-6 w-full">
                <h1 className="text-3xl font-semibold">FAQs</h1>
                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((item, idx) => (
                        <AccordionItem value={`item-${idx + 1}`}>
                            <AccordionTrigger>{item.question}</AccordionTrigger>
                            <AccordionContent>
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>

        </div>
    )
}

export default Introduction