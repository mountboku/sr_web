
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ForkliftArt from "./ForkliftArt";

const BASE_URL =
    "https://website-sr-data-517255845732-ap-south-1-an.s3.ap-south-1.amazonaws.com/product-list/";

function getImagePath(image) {
    // Supports one image path or an array of image paths
    if (typeof image === "string") return image;

    // Also supports common object formats, if your JSON uses them
    if (image && typeof image === "object") {
        return image.url || image.path || image.image || "";
    }

    return "";
}

function getImageUrl(image) {
    const path = getImagePath(image);

    if (!path) return "";

    // Encode spaces and special characters in each path segment
    return (
        BASE_URL +
        path.split("/").map(encodeURIComponent).join("/")
    );
}

export default function ProductImageCarousel({ image, name }) {
    const images = (Array.isArray(image) ? image : [image])
        .map(getImageUrl)
        .filter(Boolean);

    const [activeIndex, setActiveIndex] = useState(0);
    const [imageError, setImageError] = useState(false);

    useEffect(() => {
        setActiveIndex(0);
        setImageError(false);
    }, [image]);

    if (images.length === 0 || imageError) {
        return (
            <div className="flex h-56 items-center justify-center">
                <ForkliftArt electric />
            </div>
        );
    }

    const previousImage = (event) => {
        event.preventDefault();
        event.stopPropagation();

        setActiveIndex((current) =>
            (current - 1 + images.length) % images.length
        );
    };

    const nextImage = (event) => {
        event.preventDefault();
        event.stopPropagation();

        setActiveIndex((current) =>
            (current + 1) % images.length
        );
    };

    return (
        <div className="group/carousel relative h-56 overflow-hidden bg-brand-orangeLight">
            <img
                key={images[activeIndex]}
                src={images[activeIndex]}
                alt={`${name} - image ${activeIndex + 1}`}
                loading="lazy"
                onError={() => setImageError(true)}
                className="h-full w-full object-contain p-3"
            />

            {images.length > 1 && (
                <>
                    <button
                        type="button"
                        aria-label="Previous image"
                        onClick={previousImage}
                        className="absolute left-2 top-1/2 -translate-y-1/2
              rounded-full bg-white/90 p-2 shadow
              opacity-100 transition hover:bg-white
              md:opacity-0 md:group-hover/carousel:opacity-100"
                    >
                        <ChevronLeft size={20} />
                    </button>

                    <button
                        type="button"
                        aria-label="Next image"
                        onClick={nextImage}
                        className="absolute right-2 top-1/2 -translate-y-1/2
              rounded-full bg-white/90 p-2 shadow
              opacity-100 transition hover:bg-white
              md:opacity-0 md:group-hover/carousel:opacity-100"
                    >
                        <ChevronRight size={20} />
                    </button>

                    <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                type="button"
                                aria-label={`Show image ${index + 1}`}
                                onClick={() => {
                                    setActiveIndex(index);
                                    setImageError(false);
                                }}
                                className={`h-2 rounded-full transition-all ${index === activeIndex
                                    ? "w-5 bg-orange-500"
                                    : "w-2 bg-zinc-400"
                                    }`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
