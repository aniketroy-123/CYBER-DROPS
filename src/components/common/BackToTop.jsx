import React, { useEffect, useState } from "react";

const BackToTop = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    // SCROLL TO TOP FUNCTION WHEN CLICK ON THIS PAGE SCROLL TOP
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    // TO FIND SCROLL Y POSITION
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    // THIS USEFFECT GIVE US POSITION OF SCROLL IN EVERY PIXELS WE SCROLL
    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            {/* // IF PAGE SCROLL VALUE GRATER THAN 500 THEN SHOW BACK TO TOP BUTTON */}
            {scrollPosition > 700 ? (
                <div className="back-to-top " onClick={() => scrollToTop()}>
                    <svg width="20" height="20" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M104.704 685.248C116.706 697.246 132.982 703.986 149.952 703.986C166.923 703.986 183.198 697.246 195.2 685.248L512 368.448L828.8 685.248C840.871 696.906 857.037 703.357 873.818 703.211C890.598 703.065 906.65 696.335 918.517 684.468C930.383 672.602 937.113 656.55 937.259 639.77C937.405 622.989 930.954 606.823 919.296 594.752L557.248 232.704C545.246 220.706 528.971 213.966 512 213.966C495.03 213.966 478.754 220.706 466.752 232.704L104.704 594.752C92.706 606.754 85.9658 623.03 85.9658 640C85.9658 656.971 92.706 673.246 104.704 685.248V685.248Z"
                            fill="white"
                        />
                    </svg>
                </div>
            ) : (
                " "
            )}
        </>
    );
};

export default BackToTop;
