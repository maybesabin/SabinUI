import Toast from "./Toast"
import ToastWithTitle from "./ToastWithTitle"
import DestructiveToast from "./DestructiveToast"

const Toasts = () => {

    return (
        <div className="w-full flex flex-col items-start gap-12 justify-start">
            <p className="text-[0.85rem] font-medium text-zinc-500 mb-6">
                A Toast Component is a lightweight, customizable notification element designed to provide brief, unobtrusive feedback to users, such as success messages, warnings, or errors, in your project.
            </p>
            <Toast />
            <ToastWithTitle />
            <DestructiveToast />
        </div>
    )
}

export default Toasts