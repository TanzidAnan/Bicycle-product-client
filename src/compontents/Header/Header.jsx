import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./Header.css"
import { FaBicycle } from "react-icons/fa6";

const WheelControls = (slider) => {
    let touchTimeout
    let position
    let wheelActive

    function dispatch(e, name) {
        position.x -= e.deltaX
        position.y -= e.deltaY
        slider.container.dispatchEvent(
            new CustomEvent(name, {
                detail: {
                    x: position.x,
                    y: position.y,
                },
            })
        )
    }

    function wheelStart(e) {
        position = {
            x: e.pageX,
            y: e.pageY,
        }
        dispatch(e, "ksDragStart")
    }

    function wheel(e) {
        dispatch(e, "ksDrag")
    }

    function wheelEnd(e) {
        dispatch(e, "ksDragEnd")
    }

    function eventWheel(e) {
        e.preventDefault()
        if (!wheelActive) {
            wheelStart(e)
            wheelActive = true
        }
        wheel(e)
        clearTimeout(touchTimeout)
        touchTimeout = setTimeout(() => {
            wheelActive = false
            wheelEnd(e)
        }, 50)
    }

    slider.on("created", () => {
        slider.container.addEventListener("wheel", eventWheel, {
            passive: false,
        })
    })
}

const Header = () => {

    const [sliderRef] = useKeenSlider(
        {
            loop: false,
            rubberband: false,
            vertical: true,
        },
        [WheelControls]
    )

    return (
        <div>
            <div ref={sliderRef} className="keen-slider rounded-md" style={{ height: 600 }}>
                <div className="keen-slider__slide number-slide1">
                    <div className="flex justify-between items-center">
                        <div className="w-[50%] pl-8">
                           <h4 className="text-lg font-bold">Motor</h4>
                           <h1 className="text-4xl font-extrabold">wsr-690 suplices</h1>
                            <button className="flex justify-center gap-3 items-center mt-3 py-3 btn bg-yellow-300">Add Card <FaBicycle /></button>
                        </div>
                        <div className="">
                            <div className="">
                                <img className="w-full" src="https://i.ibb.co.com/NpYQCQS/Pearly-White-1000x1000-WB-removebg-preview-1920x816-1.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="keen-slider__slide number-slide2">
                    <div className="flex justify-between items-center">
                        <div className="w-[50%] pl-8">
                           <h4 className="text-lg font-bold">Motor</h4>
                           <h1 className="text-4xl font-extrabold">wsr-690 suplices</h1>
                            <button className="flex justify-center gap-3 items-center mt-3 py-3 btn bg-yellow-300">Add Card <FaBicycle /></button>
                        </div>
                        <div className="">
                            <div className="">
                                <img className="w-full" src="https://i.ibb.co.com/dBSRTHJ/specialized-jett-20-391571-13-removebg-preview-1920x816.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="keen-slider__slide number-slide3">
                    <div className="flex justify-between items-center">
                        <div className="w-[50%] pl-8">
                           <h4 className="text-lg font-bold">Motor</h4>
                           <h1 className="text-4xl font-extrabold">wsr-690 suplices</h1>
                            <button className="flex justify-center gap-3 items-center mt-3 py-3 btn bg-yellow-300">Add Card <FaBicycle /></button>
                        </div>
                        <div className="">
                            <div className="">
                                <img className="w-full" src="https://i.ibb.co.com/dpxFSRG/Pearly-White-1000x1000-WB-removebg-preview-1920x816.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="keen-slider__slide number-slide4">
                    <div className="flex justify-between items-center">
                        <div className="w-[50%] pl-8">
                           <h4 className="text-lg font-bold">Motor</h4>
                           <h1 className="text-4xl font-extrabold">wsr-690 suplices</h1>
                            <button className="flex justify-center gap-3 items-center mt-3 py-3 btn bg-yellow-300">Add Card <FaBicycle /></button>
                        </div>
                        <div className="">
                            <div className="">
                                <img className="w-full" src="https://i.ibb.co.com/NpYQCQS/Pearly-White-1000x1000-WB-removebg-preview-1920x816-1.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="keen-slider__slide number-slide5">
                    <div className="flex justify-between items-center">
                        <div className="w-[50%] pl-8">
                           <h4 className="text-lg font-bold">Motor</h4>
                           <h1 className="text-4xl font-extrabold">wsr-690 suplices</h1>
                            <button className="flex justify-center gap-3 items-center mt-3 py-3 btn bg-yellow-300">Add Card <FaBicycle /></button>
                        </div>
                        <div className="">
                            <div className="">
                                <img className="w-full" src="https://i.ibb.co.com/NpYQCQS/Pearly-White-1000x1000-WB-removebg-preview-1920x816-1.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="keen-slider__slide number-slide6">
                    <div className="flex justify-between items-center">
                        <div className="w-[50%] pl-8">
                           <h4 className="text-lg font-bold">Motor</h4>
                           <h1 className="text-4xl font-extrabold">wsr-690 suplices</h1>
                            <button className="flex justify-center gap-3 items-center mt-3 py-3 btn bg-yellow-300">Add Card <FaBicycle /></button>
                        </div>
                        <div className="">
                            <div className="">
                                <img className="w-full" src="https://i.ibb.co.com/NpYQCQS/Pearly-White-1000x1000-WB-removebg-preview-1920x816-1.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;