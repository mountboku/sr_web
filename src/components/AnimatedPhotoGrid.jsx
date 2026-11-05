
// import React from "react";
// import "../styles/photo-grid.css";
// const base_url = "https://website-sr-data-517255845732-ap-south-1-an.s3.ap-south-1.amazonaws.com/product-list/"

// const photos = [
//     {
//         id: 1,
//         src: "JIGS_AND_FIXTURES/bending_fixture/pictures/Bending_Fixture_web.png",
//         alt: "Portrait photography",
//     },
//     {
//         id: 2,
//         src: "JIGS_AND_FIXTURES/bending_fixture/pictures/Bending_Fixture_web.png",
//         alt: "Woman portrait",
//     },
//     {
//         id: 3,
//         src: "JIGS_AND_FIXTURES/JIG_CHSA/pictures/Jig_CHSA_web.png",
//         alt: "Lifestyle portrait",
//     },
//     {
//         id: 4,
//         src: "JIGS_AND_FIXTURES/Welding_Fixtures/pictures/Welding_Fixture_web.png",
//         alt: "Fashion photography",
//     },
//     {
//         id: 5,
//         src: "Trolley_Material_handling/heat_treatment_trolley/pictures/Heat_Treatment_Trolley_web.png",
//         alt: "Male portrait",
//     },
//     {
//         id: 6,
//         src: "Trolley_Material_handling/jumbo_trolley/pictures/Jumbo_Trolley_web.png",
//         alt: "Lifestyle photography",
//     },
//     {
//         id: 7,
//         src: "Trolley_Material_handling/overhead_manipulator/pictures/Overhead_Manipulator_web.png",
//         alt: "Fashion portrait",
//     },
//     {
//         id: 8,
//         src: "Trolley_Material_handling/storage_racks/pictures/Storage_Racks_web.png",
//         alt: "Portrait",
//     },
//     // {
//     //     id: 9,
//     //     src: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800",
//     //     alt: "Creative portrait",
//     // },
//     // {
//     //     id: 10,
//     //     src: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&sat=-30",
//     //     alt: "Editorial photography",
//     // },
// ];

// export default function AnimatedPhotoGrid() {
//     return (
//         <section className="w-full px-4 py-16 md:px-10">
//             <div className="mx-auto max-w-7xl">

//                 {/* <div className="mb-10 text-center">
//                     <p className="mb-3 text-sm font-semibold uppercase
//             tracking-[0.25em] text-gray-400">
//                         Visual Stories
//                     </p>

//                     <h2 className="text-3xl font-bold text-gray-900
//             md:text-5xl">
//                         A World of Moments
//                     </h2>

//                     <p className="mx-auto mt-4 max-w-xl text-gray-500">https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=8
//                         Every frame captures a different story.
//                     </p>
//                 </div> */}

//                 <div className="photo-grid">
//                     {photos.map((photo, index) => (
//                         <div
//                             key={photo.id}
//                             className={`photo-tile photo-tile-${index + 1}`}
//                             style={{
//                                 "--delay": `${index * 1.2}s`,
//                             }}
//                         >
//                             <img
//                                 src={base_url + photo.src}
//                                 alt={photo.alt}
//                                 loading="lazy"
//                                 className="object-contain"
//                             />
//                         </div>
//                     ))}
//                 </div>

//             </div>
//         </section>
//     );
// }


import { useEffect, useState } from "react";
import "../styles/photo-grid.css";
const base_url = "https://website-sr-data-517255845732-ap-south-1-an.s3.ap-south-1.amazonaws.com/product-list/"

const photos = [
    {
        id: 1,
        src: "JIGS_AND_FIXTURES/bending_fixture/pictures/Bending_Fixture_web.png",
        alt: "Portrait photography",
    },
    {
        id: 2,
        src: "JIGS_AND_FIXTURES/bending_fixture/pictures/Bending_Fixture_web.png",
        alt: "Woman portrait",
    },
    {
        id: 3,
        src: "JIGS_AND_FIXTURES/JIG_CHSA/pictures/Jig_CHSA_web.png",
        alt: "Lifestyle portrait",
    },
    {
        id: 4,
        src: "JIGS_AND_FIXTURES/Welding_Fixtures/pictures/Welding_Fixture_web.png",
        alt: "Fashion photography",
    },
    {
        id: 5,
        src: "Trolley_Material_handling/heat_treatment_trolley/pictures/Heat_Treatment_Trolley_web.png",
        alt: "Male portrait",
    },
    {
        id: 6,
        src: "Trolley_Material_handling/jumbo_trolley/pictures/Jumbo_Trolley_web.png",
        alt: "Lifestyle photography",
    },
    {
        id: 7,
        src: "Trolley_Material_handling/overhead_manipulator/pictures/Overhead_Manipulator_web.png",
        alt: "Fashion portrait",
    },
    {
        id: 8,
        src: "Trolley_Material_handling/returnable_storage_racks/pictures/Returnable_storage_rack1_web.png",
        alt: "Portrait",
    },
    // {
    //     id: 9,
    //     src: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800",
    //     alt: "Creative portrait",
    // },
    // {
    //     id: 10,
    //     src: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&sat=-30",
    //     alt: "Editorial photography",
    // },
];

// const photos = [
//     { id: 1, src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800" },
//     { id: 2, src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800" },
//     { id: 3, src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800" },
//     { id: 4, src: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800" },
//     { id: 5, src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800" },
//     { id: 6, src: "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?w=800" },
//     { id: 7, src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800" },
//     { id: 8, src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800" },
//     { id: 9, src: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800" },
//     { id: 10, src: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&sat=-30" },
// ];

const shuffle = (array) => {
    const result = [...array];

    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }

    return result;
};

export default function AnimatedPhotoGrid() {
    const [visiblePhotos, setVisiblePhotos] = useState(
        () => shuffle(photos).slice(0, 6)
    );

    const [transitionKey, setTransitionKey] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setVisiblePhotos((current) => {
                const remaining = photos.filter(
                    (photo) => !current.some((item) => item.id === photo.id)
                );

                return [
                    ...current.slice(3),
                    ...shuffle(remaining).slice(0, 3),
                ];
            });

            setTransitionKey((key) => key + 1);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="w-full px-4 py-12">
            <div className="mx-auto max-w-5xl">
                <div className="photo-grid">
                    {visiblePhotos.map((photo, index) => (
                        <div
                            key={photo.id}
                            className="photo-tile"
                            style={{
                                animationDelay: `${index * 0.12}s`,
                            }}
                        >
                            <img
                                src={base_url + photo.src}
                                alt={`Gallery image ${photo.id}`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
