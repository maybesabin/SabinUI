import SkeletonCard from "./SkeletonCard"
import SkeletonUser from "./SkeletonUser"

const Skeletons = () => {

    return (
        <div className="w-full flex flex-col items-start gap-12 justify-start">
            <p className="text-[0.85rem] font-medium text-zinc-500 mb-6">
                A placeholder loading indicator that mimics the layout of your content, providing users with a visual cue while data is being fetched or loaded. Perfect for improving perceived performance and enhancing user experience.
            </p>
            <SkeletonUser />
            <SkeletonCard />
        </div>
    )
}

export default Skeletons