import Input from "./Input"
import InputForm from "./InputForm"
import InputWithButton from "./InputWithButton"
import InputWithLabel from "./InputWithLabel"

const Inputs = () => {

    return (
        <div className="w-full flex flex-col items-start gap-12 justify-start">
            <Input />
            <InputWithLabel />
            <InputWithButton />
            <InputForm />
        </div>
    )
}

export default Inputs