import Input from "./Input"
import InputForm from "./InputForm"
import InputWithButton from "./InputWithButton"
import InputWithLabel from "./InputWithLabel"
import InputWithDescription from "./InputWithDescription"

const Inputs = () => {

    return (
        <div className="w-full flex flex-col items-start gap-12 justify-start">
            <p className="text-[0.85rem] font-medium text-zinc-500 mb-6">
                Provides a versatile input field component for capturing user data, designed to integrate effortlessly with your styling and enhance user interaction.
            </p>
            <Input />
            <InputWithLabel />
            <InputWithButton />
            <InputWithDescription />
            <InputForm />
        </div>
    )
}

export default Inputs