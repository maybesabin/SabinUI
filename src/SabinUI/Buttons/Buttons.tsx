import PrimaryButton from "./PrimaryButton"
import ConfirmButton from "./ConfirmButton"
import DeleteButton from "./DeleteButton"
const Buttons = () => {

    return (
        <div className="w-full flex flex-col items-start gap-12 justify-start">
            <p className="text-[0.85rem] font-medium text-zinc-500 mb-6">
                Renders a fully customizable button component that seamlessly blends with your design, providing both functionality and aesthetic consistency.
            </p>
            <PrimaryButton />
            <ConfirmButton />
            <DeleteButton />
        </div>
    )
}

export default Buttons