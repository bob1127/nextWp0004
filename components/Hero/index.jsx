"use client";
import { useEffect } from "react";
import gsap from "gsap";
import styles from "./style.module.css"; // Import CSS Module for component styles

const Hero = () => {
  useEffect(() => {
    // GSAP animations
    gsap.from(".nav-container", 2, {
      opacity: 0,
      y: -60,
      ease: "power3.inOut",
      delay: 0.5,
    });

    gsap.from(".hero > *", 1, {
      opacity: 0,
      y: 60,
      ease: "power3.inOut",
      delay: 1,
      stagger: {
        amount: 0.5,
      },
    });

    gsap.from(".blob", 2, {
      scale: 0,
      ease: "power3.inOut",
      delay: 1.5,
      stagger: {
        amount: 0.5,
      },
    });

    gsap.from(".bg-gradient", 2, {
      scale: 0,
      ease: "power3.inOut",
      delay: 2,
    });

    // Rotate text around blob-3
    const text = document.querySelector(".text p");
    if (text) {
      text.innerHTML = text.innerText
        .split("")
        .map(
          (char, i) =>
            `<span style="transform:rotate(${i * 5.8}deg)">${char}</span>`
        )
        .join("");
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.navContainer}>
        <div className={styles.nav}>
          <div className={styles.navLogo}>
            <a href="#">JBY London</a>
          </div>
          <div className={styles.navLinks}>
            <a href="#">Photographers</a>
            <a href="#">Directors</a>
            <a href="#">Clients</a>
            <a href="#">About us</a>
          </div>
          <div className={styles.navCta}>
            <a href="#">connect with us</a>
          </div>
        </div>
      </div>

      <div className={`${styles.bgGradient} ${styles.bgGradientLeft}`}>
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 500"
          id="blobSvg"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop
                offset="0%"
                style={{ stopColor: "rgb(248, 121, 21)" }}
              ></stop>
              <stop
                offset="100%"
                style={{ stopColor: "rgb(255, 201, 69)" }}
              ></stop>
            </linearGradient>
          </defs>
          <path id="blob" fill="url(#gradient)">
            <animate
              attributeName="d"
              dur="4s"
              repeatCount="indefinite"
              values="M421.63508,307.39005Q364.7801,364.7801,307.39005,427.43403Q250,490.08796,191.6822,428.36178Q133.3644,366.6356,70.9089,308.3178Q8.4534,250,54.21728,174.99058Q99.98115,99.98115,174.99058,81.49686Q250,63.01257,330.66021,75.84607Q411.32042,88.67958,444.90524,169.33979Q478.49006,250,421.63508,307.39005Z;M395.5,320Q390,390,320,400Q250,410,172,408Q94,406,59,328Q24,250,70.5,183.5Q117,117,183.5,108Q250,99,335,89.5Q420,80,410.5,165Q401,250,395.5,320Z;M408.24461,332.63257Q415.26513,415.26513,332.63257,434.71568Q250,454.16622,179.33614,422.74697Q108.67228,391.32772,65.87585,320.66386Q23.07942,250,63.27221,176.73251Q103.46501,103.46501,176.73251,63.02288Q250,22.58075,311.86507,74.4253Q373.73015,126.26985,387.47712,188.13493Q401.22409,250,408.24461,332.63257Z;M418.08664,320.33435Q390.6687,390.6687,320.33435,427.91946Q250,465.17023,188.27506,419.31005Q126.55013,373.44987,106.38448,311.72494Q86.21883,250,84.09726,165.98785Q81.9757,81.9757,165.98785,53.98938Q250,26.00305,311.1687,76.83282Q372.3374,127.6626,408.92099,188.8313Q445.50458,250,418.08664,320.33435Z;M421.63508,307.39005Q364.7801,364.7801,307.39005,427.43403Q250,490.08796,191.6822,428.36178Q133.3644,366.6356,70.9089,308.3178Q8.4534,250,54.21728,174.99058Q99.98115,99.98115,174.99058,81.49686Q250,63.01257,330.66021,75.84607Q411.32042,88.67958,444.90524,169.33979Q478.49006,250,421.63508,307.39005Z"
            ></animate>
          </path>
        </svg>
      </div>

      <div className={`${styles.bgGradient} ${styles.bgGradientRight}`}>
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 500"
          id="blobSvgRight"
        >
          <defs>
            <linearGradient
              id="gradientRight"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop
                offset="0%"
                style={{ stopColor: "rgb(248, 121, 21)" }}
              ></stop>
              <stop
                offset="100%"
                style={{ stopColor: "rgb(255, 201, 69)" }}
              ></stop>
            </linearGradient>
          </defs>
          <path id="blobRight" fill="url(#gradientRight)">
            <animate
              attributeName="d"
              dur="4s"
              repeatCount="indefinite"
              values="M421.63508,307.39005Q364.7801,364.7801,307.39005,427.43403Q250,490.08796,191.6822,428.36178Q133.3644,366.6356,70.9089,308.3178Q8.4534,250,54.21728,174.99058Q99.98115,99.98115,174.99058,81.49686Q250,63.01257,330.66021,75.84607Q411.32042,88.67958,444.90524,169.33979Q478.49006,250,421.63508,307.39005Z;M395.5,320Q390,390,320,400Q250,410,172,408Q94,406,59,328Q24,250,70.5,183.5Q117,117,183.5,108Q250,99,335,89.5Q420,80,410.5,165Q401,250,395.5,320Z;M408.24461,332.63257Q415.26513,415.26513,332.63257,434.71568Q250,454.16622,179.33614,422.74697Q108.67228,391.32772,65.87585,320.66386Q23.07942,250,63.27221,176.73251Q103.46501,103.46501,176.73251,63.02288Q250,22.58075,311.86507,74.4253Q373.73015,126.26985,387.47712,188.13493Q401.22409,250,408.24461,332.63257Z;M418.08664,320.33435Q390.6687,390.6687,320.33435,427.91946Q250,465.17023,188.27506,419.31005Q126.55013,373.44987,106.38448,311.72494Q86.21883,250,84.09726,165.98785Q81.9757,81.9757,165.98785,53.98938Q250,26.00305,311.1687,76.83282Q372.3374,127.6626,408.92099,188.8313Q445.50458,250,418.08664,320.33435Z;M421.63508,307.39005Q364.7801,364.7801,307.39005,427.43403Q250,490.08796,191.6822,428.36178Q133.3644,366.6356,70.9089,308.3178Q8.4534,250,54.21728,174.99058Q99.98115,99.98115,174.99058,81.49686Q250,63.01257,330.66021,75.84607Q411.32042,88.67958,444.90524,169.33979Q478.49006,250,421.63508,307.39005Z"
            ></animate>
          </path>
        </svg>
      </div>

      <div className="flex flex-col justify-center items-center ">
        <div className="flex  flex-col justify-center items-center">
          <h1 className="dark:text-white ">一起玩生活。多彩每一天</h1>
          <div>
            <button>Write us a letter</button>
          </div>
          <div className="dark:text-white  w-1/2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
            voluptates <br></br> enim expedita, esse laboriosam veniam!
            Officiis, harum? Velit, mollitia vero.
          </div>
        </div>
      </div>

      <div className={`${styles.blob} ${styles.blob1}`}>
        <div className={styles.circle}></div>
        <div className={styles.logo}></div>
        <div className={styles.text}>
          <p>I never tell the same joke twice I have a DRY sense of humor.</p>
        </div>
      </div>
      <div className={`${styles.blob} ${styles.blob2}`}></div>
      <div className={`${styles.blob} ${styles.blob3}`}>+</div>
    </div>
  );
};

export default Hero;
