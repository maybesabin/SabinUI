import PrimaryButton from "./PrimaryButton"
import ConfirmButton from "./ConfirmButton"
import DeleteButton from "./DeleteButton"
const Buttons = () => {

    return (
        <div className="w-full flex flex-col items-start gap-12 justify-start">
            <PrimaryButton />
            <ConfirmButton />
            <DeleteButton />
        </div>
    )
}

export default Buttons