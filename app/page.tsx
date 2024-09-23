// Craft Imports
import { Section, Container } from "@/components/craft";

import Balancer from "react-wrap-balancer";
// import Categories from "../components/CategoriesPage";
// Components
import Carousel from "../components/EmblaCarousel06/index";
import Link from "next/link";
import Hero from "../components/Hero/index.jsx";
// Icons
import CardCarousel from "../components/EmblaCarousel06/index";
import Marquee from "react-fast-marquee";
import GsapText from "../components/RevealText/index";
import { File, Pen, Tag, Boxes, User, Folder } from "lucide-react";
import GsapImage from "../components/RevealImage/index";
// This page is using the craft.tsx component and design system
export default function Home() {
  return (
    <Section>
      <Container>
        <ExampleJsx />
      </Container>
    </Section>
  );
}

// This is just some example JS to demonstrate automatic styling from brijr/craft
const ExampleJsx = () => {
  return (
    <>
      <Hero />

      <section className="section-HeroCarousel mb-[100px]">
        <div className="top w-[85vw] mx-auto">
          <GsapText text="網頁設計案例" lineHeight="90px" id="text2" />{" "}
          {/* Unique id */}
          {/* <GsapText text="Hello World!" fontSize="30px" lineHeight="40px" /> */}
          <p className="text-[30px]">PortFolio Sample</p>
        </div>
        <div className="bottom">
          <Carousel />
        </div>
      </section>

      <section className="section-categories hidden">
        <div className="flex  mx-auto md:w-[90%] w-full xl:flex-row flex-col flex-wrap md:flex-row justify-center items-center">
          {" "}
          <div className="top w-[85vw]   mx-auto">
            <GsapText text="專案總覽" lineHeight="90px" id="text1" />{" "}
            {/* Unique id */}
            {/* <GsapText text="Hello World!" fontSize="30px" lineHeight="40px" /> */}
            <p className="text-[30px]">All PortFolio</p>
          </div>
          <div className="w-full   md:w-1/2 relative">
            <div className="marquee absolute top-1/2 translate-y-1/2 w-full left-0 z-[999999]">
              <Marquee>
                <div className="text-[30px] font-black text-white flex">
                  <p className="bg-[#1cacff] inline-black border border-black bg-white px-4 rounded-[30px] w-auto">
                    林記鴨肉飯
                  </p>
                  。
                  <p className="bg-[#1cacff] inline-black border border-black bg-white px-4 rounded-[30px] w-auto">
                    林記鴨肉飯
                  </p>
                  。
                  <p className="bg-[#1cacff] inline-black border border-black bg-white px-4 rounded-[30px] w-auto">
                    林記鴨肉飯
                  </p>
                </div>
              </Marquee>
            </div>
            <div className="mark border border-black bg-white w-[100px] flex  justify-center items-start h-[100px] rounded-xl absolute z-[9999] left-[30px] top-[30px]">
              <p className="text-center text-[26px] text-black">食</p>
              <br></br>|<br></br>FOOD
            </div>
            <div className="img ">
              <GsapImage imageSrc="https://www.accorder.co.jp/cms/wp-content/themes/accorder2024/assets/img/graphic_strength2.webp" />
            </div>
          </div>
          <div className="w-full md:w-1/2 relative">
            <div className="mark border border-black bg-white w-[100px] flex  justify-center items-start h-[100px] rounded-xl absolute z-[9999] left-[30px] top-[30px]">
              <p className="text-center text-[26px] text-black">食</p>
              <br></br>|<br></br>FOOD
            </div>
            <div className="img ">
              <GsapImage imageSrc="https://www.accorder.co.jp/cms/wp-content/themes/accorder2024/assets/img/graphic_strength2.webp" />
            </div>
          </div>
          <div className="w-full md:w-1/2 relative">
            <div className="mark border border-black bg-white w-[100px] flex  justify-center items-start h-[100px] rounded-xl absolute z-[9999] left-[30px] top-[30px]">
              <p className="text-center text-[26px] text-black">食</p>
              <br></br>|<br></br>FOOD
            </div>
            <div className="img ">
              <GsapImage imageSrc="https://www.accorder.co.jp/cms/wp-content/themes/accorder2024/assets/img/graphic_strength2.webp" />
            </div>
          </div>
          <div className="w-full md:w-1/2 relative">
            <div className="mark border border-black bg-white w-[100px] flex  justify-center items-start h-[100px] rounded-xl absolute z-[9999] left-[30px] top-[30px]">
              <p className="text-center text-[26px] text-black">食</p>
              <br></br>|<br></br>FOOD
            </div>
            <div className="img ">
              <GsapImage imageSrc="https://www.accorder.co.jp/cms/wp-content/themes/accorder2024/assets/img/graphic_strength2.webp" />
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto flex justify-center max-w-7xl">
        <article className="prose-m-none">
          <GsapText text="專案總覽" lineHeight="90px" id="text1" />
          <p>All PortFolio</p>
          {/* Vercel Clone Starter */}

          <p></p>
          <div className="grid md:grid-cols-3 gap-4 mt-6 not-prose">
            {/* <Link
              className="border h-48 bg-accent/50 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
              href="/posts"
            >
              <Pen size={32} />
              <span>
                Posts{" "}
                <span className="block text-sm text-muted-foreground">
                  All posts from your WordPress
                </span>
              </span>
            </Link>
            <Link
              className="border h-48 bg-accent/50 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
              href="/pages"
            >
              <File size={32} />
              <span>
                Pages{" "}
                <span className="block text-sm text-muted-foreground">
                  Custom pages from your WordPress
                </span>
              </span>
            </Link>
            <Link
              className="border h-48 bg-accent/50 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
              href="/posts/authors"
            >
              <User size={32} />
              <span>
                Authors{" "}
                <span className="block text-sm text-muted-foreground">
                  List of the authors from your WordPress
                </span>
              </span>
            </Link> */}
            {/* <Link
              className="border h-48 bg-accent/50 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
              href="/posts/tags"
            >
              <Tag size={32} />
              <span>
                Tags{" "}
                <span className="block text-sm text-muted-foreground">
                  Content by tags from your WordPress
                </span>
              </span>
            </Link>
            <Link
              className="border h-48 bg-accent/50 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
              href="/posts/categories"
            >
              <Boxes size={32} />
              <span>
                Categories{" "}
                <span className="block text-sm text-muted-foreground">
                  Categories from your WordPress
                </span>
              </span>
            </Link> */}
            <Link
              className="border h-48 bg-accent/50 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
              href="/posts"
            >
              <Folder size={32} />
              <span>
                Documentation{" "}
                <span className="block text-sm text-muted-foreground">
                  How to use `next-wp`
                </span>
              </span>
            </Link>
          </div>
        </article>
        {/* <section className="section-categories">
          <Categories />
        </section> */}
      </div>
    </>
  );
};
