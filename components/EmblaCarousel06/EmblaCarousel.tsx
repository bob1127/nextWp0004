// EmblaCarousel.tsx

"use client"; // Ensure this component is rendered only on the client side
import type { EmblaOptionsType } from "embla-carousel"; // Adjust the import path based on the library's documentation

import React, { useCallback, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import { DotButton, useDotButton } from "./EmblaCarosuelDotButton";

const TWEEN_FACTOR_BASE = 0.52;

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

type PropType = {
  slides: string[]; // Array of image URLs
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const tweenFactor = useRef(0);
  const tweenNodes = useRef<HTMLElement[]>([]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  // const setTweenNodes = useCallback((emblaApi: any): void => {
  //   tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
  //     return slideNode.querySelector(".embla__slide__number") as HTMLElement;
  //   });
  // }, []);
  interface EmblaCarouselType {
    slideNodes: () => HTMLElement[];
    scrollSnapList: () => number[];
    scrollProgress: () => number;
    slidesInView: () => number[];
    internalEngine: () => {
      slideRegistry: { [key: number]: number[] };
      options: {
        loop: boolean;
      };
      slideLooper: {
        loopPoints: Array<{ index: number; target: () => number }>;
      };
    };
    on: (event: string, callback: () => void) => void;
    off: (event: string, callback: () => void) => void;
  }

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);
  type EmblaEventType = "scroll" | "slideFocus" | "reInit";

  const tweenScale = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine();
      const scrollProgress = emblaApi.scrollProgress();
      const slidesInView = emblaApi.slidesInView();
      const isScrollEvent = eventName === "scroll";

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIndex];

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target();
              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target);
                diffToTarget =
                  sign === -1
                    ? scrollSnap - (1 + scrollProgress)
                    : scrollSnap + (1 - scrollProgress);
              }
            });
          }

          const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
          const scale = numberWithinRange(tweenValue, 0, 1).toString();
          const tweenNode = tweenNodes.current[slideIndex];
          if (tweenNode) tweenNode.style.transform = `scale(${scale})`;
        });
      });
    },
    []
  );

  return (
    <div className="embla relative">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container pl-4">
          {slides.map((url, index) => (
            <div
              className="embla__slide border-dotted border-2 border-black   relative w-[450px] h-[760px]"
              key={index}
            >
              <div className="txt absolute bottom-[45px] left-[50px]  z-[999] p-10">
                <h1 className="bg-white inline-block leading-[100px] ">
                  Myリペアで 検品<br></br>修理状況を確認！
                </h1>
                <p className="text-[18px] w-[60%]">
                  NAOTTA!で修理された端末には
                  1週間の「あんしん保証」がつきます。
                </p>
              </div>
              <div className="img  absolute top-0 right-0 w-[80%] m-0 p-0 z-[99]">
                <img
                  src={url}
                  // alt={`Slide ${index + 1}`}
                  className="object-cover h-[500px] m-0 p-0"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className=" absolute w-[85vw]  flex justify-between left-0 top-1/2  translate-y-1/2 flex-row ">
        <div className=" w-[40px]  ">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        </div>
        <div className=" w-[40px] ">
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
