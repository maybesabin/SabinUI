import Card from "./Card"
import GradientCard from "./GradientCard"
import HoverCard from "./HoverCard"

const Cards = () => {

    return (
        <div className="w-full flex flex-col items-start gap-12 justify-start">
            <p className="text-[0.85rem] font-medium text-zinc-500 mb-6">
                Renders a fully customizable button component that seamlessly blends with your design, providing both functionality and aesthetic consistency.
            </p>
            <Card />
            <GradientCard />
            <HoverCard />
        </div>
    )
}

export default Cards