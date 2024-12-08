import BasicModal from "./BasicModal"
import TwoButtonModal from "./TwoButtonModal"

const Modal = () => {

    return (
        <div className="w-full flex flex-col items-start gap-12 justify-start">
            <p className="text-[0.85rem] font-medium text-zinc-500 mb-6">
                A modal is a versatile, customizable UI component for focused interactions, ideal for displaying messages, capturing input, or presenting extra content seamlessly.
            </p>
            <BasicModal />
            <TwoButtonModal />
        </div>
    )
}

export default Modal