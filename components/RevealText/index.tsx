// GsapText.tsx
"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";

interface GsapTextProps {
  text: string;
  fontSize?: string;
  lineHeight?: string;
  id?: string; // Add id or className prop for unique identification
}

const GsapText: React.FC<GsapTextProps> = ({
  text,
  fontSize = "7rem",
  lineHeight = "90px",
  id, // Accept id prop
}) => {
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const myText = new SplitType(textRef.current, { types: "chars" });

    // Add some debugging
    console.log("SplitType Result:", myText);

    const handleAnimation = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.to(`#${id} .char`, {
            // Use the unique id to target the chars
            y: 0,
            stagger: 0.03,
            delay: 0.4,
            duration: 0.8,
            ease: "power3.out",
          });
        }
      });
    };

    const observer = new IntersectionObserver(handleAnimation, {
      threshold: 0.1,
    });

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, [text, id]);

  return (
    <p
      ref={textRef}
      id={id} // Set the id for unique targeting
      style={{
        fontSize,
        lineHeight,
        textTransform: "uppercase",
        fontFamily: "'Bebas Neue', sans-serif",
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      }}
    >
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="char"
          style={{
            transform: "translateY(125px)",
            transition: "transform .5s",
          }}
        >
          {char}
        </span>
      ))}
    </p>
  );
};

export default GsapText;
