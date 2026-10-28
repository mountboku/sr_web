
import { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function AutoScrollButton({
    direction = "right",
    speed = 1,
    className = "",
}) {
    const animationRef = useRef(null);
    const previousTimeRef = useRef(null);

    const stopScrolling = () => {
        if (animationRef.current !== null) {
            cancelAnimationFrame(animationRef.current);
            animationRef.current = null;
        }

        previousTimeRef.current = null;
    };

    const startScrolling = () => {
        stopScrolling();

        const scroll = (timestamp) => {
            if (previousTimeRef.current === null) {
                previousTimeRef.current = timestamp;
            }

            const delta = timestamp - previousTimeRef.current;
            previousTimeRef.current = timestamp;

            window.scrollBy({
                left: (direction === "right" ? 1 : -1) * speed * delta,
                behavior: "instant",
            });

            const atLeft = window.scrollX <= 0;
            const atRight =
                window.scrollX + window.innerWidth >=
                document.documentElement.scrollWidth - 1;

            if (
                (direction === "left" && atLeft) ||
                (direction === "right" && atRight)
            ) {
                stopScrolling();
                return;
            }

            animationRef.current = requestAnimationFrame(scroll);
        };

        animationRef.current = requestAnimationFrame(scroll);
    };

    useEffect(() => {
        return () => stopScrolling();
    }, []);

    const Icon = direction === "left" ? ChevronLeft : ChevronRight;

    return (
        <button
            type="button"
            aria-label={`Scroll ${direction}`}
            onMouseEnter={startScrolling}
            onMouseLeave={stopScrolling}
            className={className}
        >
            <Icon size={22} />
        </button>
    );
}
