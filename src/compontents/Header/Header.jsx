import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./Header.css"

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
                        <div className="w-[50%]">
                            5
                        </div>
                        <div className="">
                            <div className="">
                                <img className="w-full" src="https://i.ibb.co.com/NpYQCQS/Pearly-White-1000x1000-WB-removebg-preview-1920x816-1.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="keen-slider__slide number-slide2">2</div>
                <div className="keen-slider__slide number-slide3">3</div>
                <div className="keen-slider__slide number-slide4">4</div>
                <div className="keen-slider__slide number-slide5">5</div>
                <div className="keen-slider__slide number-slide6">6</div>
            </div>
        </div>
    );
};

export default Header;