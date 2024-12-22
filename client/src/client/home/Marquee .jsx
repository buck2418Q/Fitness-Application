/* eslint-disable react/prop-types */
import  { useState, useRef } from "react";

const Marquee = ({ speed = 20 }) => {
    const marqueeRef = useRef(null); // Ref for the marquee container
    const [isPaused, setIsPaused] = useState(false);

    const handleMouseEnter = () => {
        if (marqueeRef.current) {
            marqueeRef.current.style.animationPlayState = "paused";
        }
        setIsPaused(true);
    };

    const handleMouseLeave = () => {
        if (marqueeRef.current) {
            marqueeRef.current.style.animationPlayState = "running";
        }
        setIsPaused(false);
    };

    return (
        <div
            className="relative w-full overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Marquee container */}
            <div
                ref={marqueeRef}
                className="whitespace-nowrap flex gap-10"
                style={{
                    animation: `marquee ${speed}s linear infinite`,
                    animationPlayState: isPaused ? "paused" : "running",
                }}
            >
                <div className="bg-green-400 h-40 w-60"></div>
                <div className="bg-green-900 h-40 w-60"></div>
            </div>
        </div>
    );
};

export default Marquee;
