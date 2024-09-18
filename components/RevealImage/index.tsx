"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const styles = {
  controlContainer: "mb-8",
  box: "relative w-full hover:scale-105 duration-700 border-2 border-black rounded-xl h-[500px] overflow-hidden",
  img: "w-full h-full object-cover",
  uncover: "absolute top-0 left-0 w-full h-full flex flex-row",
  uncoverSlice: "flex-grow h-full bg-white",
};

// Define the props for the component
interface AnimationComponentProps {
  imageSrc: string; // Prop to pass the image source URL
}

const AnimationComponent: React.FC<AnimationComponentProps> = ({
  imageSrc,
}) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const uncoverSliceRefs = useRef<HTMLDivElement[]>([]);
  const animationStarted = useRef(false); // To ensure animation starts only once

  useEffect(() => {
    if (!imgRef.current || uncoverSliceRefs.current.length === 0) return;

    const tl = gsap.timeline({ paused: true }); // Start the timeline in a paused state
    tl.addLabel("start")
      .to(
        uncoverSliceRefs.current,
        {
          height: 0,
          ease: "power4.inOut",
          stagger: { amount: 0.44 },
          duration: 1.5,
        },
        "start"
      )
      .to(
        imgRef.current,
        {
          scale: 1.5,
          ease: "power4.inOut",
          duration: 2,
        },
        "start"
      );

    // IntersectionObserver callback to start animation
    const handleIntersection: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !animationStarted.current) {
          animationStarted.current = true; // Mark animation as started
          gsap.delayedCall(0.35, () => tl.play()); // Start animation with a delay of 0.35 seconds
        }
      });
    };

    // Create IntersectionObserver instance
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1, // Trigger when 10% of the image is visible
    });

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    // Cleanup observer on unmount
    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <div className="overflow-hidden h-full duration-700 w-full p-2">
      <div className={styles.box} id="mybox">
        <img
          ref={imgRef}
          className={styles.img}
          src={imageSrc} // Use the imageSrc prop
          alt=""
        />
        <div className={styles.uncover}>
          <div
            className={styles.uncoverSlice}
            ref={(el) => {
              if (el) uncoverSliceRefs.current[0] = el;
            }}
          ></div>
          <div
            className={styles.uncoverSlice}
            ref={(el) => {
              if (el) uncoverSliceRefs.current[1] = el;
            }}
          ></div>
          <div
            className={styles.uncoverSlice}
            ref={(el) => {
              if (el) uncoverSliceRefs.current[2] = el;
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default AnimationComponent;
