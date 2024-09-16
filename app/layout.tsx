import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";
import Marquee from "react-fast-marquee";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/nav/mobile-nav";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Main } from "@/components/craft";
import { mainMenu, contentMenu } from "@/menu.config";
import { Section, Container } from "@/components/craft";
import Balancer from "react-wrap-balancer";

import Logo from "@/public/logo.svg";

import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "WordPress & Next.js Starter by 9d8",
  description:
    "A starter template for Next.js with WordPress as a headless CMS.",
  metadataBase: new URL("https://wp.9d8.dev"),
};

// Revalidate content every hour
export const revalidate = 20;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn("min-h-screen font-sans antialiased", fontSans.variable)}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Marquee>
            <div className="py-3 dark:bg-[#92f116] bg-black text-white dark:text-black dark:text-bold">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
              necessitatibus tenetur illo excepturi. Animi perspiciatis
              cupiditate, ipsam suscipit deleniti voluptatibus? Autem, nostrum?
              Necessitatibus ad perspiciatis, doloribus suscipit aspernatur
              magni eaque. consectetur adipisicing elit. Velit necessitatibus
              tenetur illo excepturi. Animi perspiciatis cupiditate, ipsam
              suscipit deleniti voluptatibus? Autem, nostrum? Necessitatibus ad
              perspiciatis, doloribus suscipit aspernatur magni eaque.
            </div>
          </Marquee>
          <Nav />
          <Main>{children}</Main>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

const Nav = ({ className, children, id }: NavProps) => {
  return (
    <nav
      className={cn(
        "sticky z-50 top-0 bg-background",
        "border-b",
        "fade-in",
        className
      )}
      id={id}
    >
      <div
        id="nav-container"
        className="max-w-7xl mx-auto py-4 flex justify-between items-center"
      >
        <Link
          className="hover:opacity-75 transition-all flex gap-2 items-center"
          href="/"
        >
          <h2 className="sr-only">next-wp starter</h2>
          <Image
            src={Logo}
            alt="Logo"
            className="dark:invert"
            width={84}
            height={30.54}
          ></Image>
        </Link>
        {children}
        {/* <div className="absolute border border-fuchsia-500 right-[50px] z-[999999] ">
          <div className="NavSlidertext border border-black  rounded-[30px]  w-[210px]">
            TITLE TITLE TITLE
          </div>
        </div> */}

        <div className="flex  relative items-center  gap-2">
          <div className=" flex flex-row ">
            <div className="mx-2 hidden md:flex">
              {Object.entries(mainMenu).map(([key, href]) => (
                <Button key={href} asChild variant="ghost" size="sm">
                  <Link href={href}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </Link>
                </Button>
              ))}
            </div>

            <Button asChild className="hidden sm:flex">
              <Link href="https://github.com/9d8dev/next-wp">Get Started</Link>
            </Button>
          </div>

          <div className="NavSlidertext border border-black text-center dark:border-white rounded-[30px]  w-[210px]">
            <span className="inline-block animate-rotate360">⚾️</span> TITLE
            TITLE
            <span className="inline-block animate-rotate360">⚾️</span>
          </div>
          <div className="">
            <MobileNav />
          </div>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <>
      <footer className="flex   py-[80px]  bg-[#71bff3] rounded-2xl  relative flex-col md:flex-row border border-black px-[80px]">
        <div className="img absolute z-[9999] bottom-0 right-0">
          {/* <img
            className="w-[200px]"
            src="https://headz.design/assets/images/image09.jpg?v=f08fe36e"
            alt=""
          /> */}
        </div>
        <div className="left w-full md:w-1/2">
          <div className="txt">
            <h1 className="w-1/2 text-[100px] text-black">CHEEK</h1>
          </div>
        </div>
        <div className="right  pr-10  flex flex-col w-full md:w-1/2">
          <div className="flex py-4 flex-row justify-end items-center">
            <b className="text-[20px] text-right">波波麗的生活實記</b>
            <div className="border border-black rounded-[30px] duration-500 hover:w-[160px] ml-3 hover:bg-[#95f116] group w-[100px] bg-white py-1 text-center">
              <p className="block group-hover:hidden">一起玩生活</p>
              <div className="hidden group-hover:block   duration-500">
                <Marquee>
                  <div>
                    Life ipsum dolor, sit amet consectetur adipisicing elit.
                    Eligendi asperiores laudantium reprehenderit maxime officia
                    magni vitae provident blanditiis saepe excepturi, adipisci
                    eveniet! Adipisci soluta tenetur enim provident. Facere, est
                    facilis.
                  </div>
                </Marquee>
              </div>
            </div>

            <div className="border border-black rounded-[30px] duration-500 hover:w-[160px] ml-3 hover:bg-[#95f116] group w-[100px] bg-white py-1 text-center">
              <p className="block group-hover:hidden">一起吃餐廳</p>
              <div className="hidden group-hover:block   duration-500">
                <Marquee>
                  <div>
                    Life ipsum dolor, sit amet consectetur adipisicing elit.
                    Eligendi asperiores laudantium reprehenderit maxime officia
                    magni vitae provident blanditiis saepe excepturi, adipisci
                    eveniet! Adipisci soluta tenetur enim provident. Facere, est
                    facilis.
                  </div>
                </Marquee>
              </div>
            </div>

            <div className="border border-black rounded-[30px] duration-500 hover:w-[160px] ml-3 hover:bg-[#95f116] group w-[100px] bg-white py-1 text-center">
              <p className="block group-hover:hidden">一起懂知識</p>
              <div className="hidden group-hover:block   duration-500">
                <Marquee>
                  <div>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatum vitae magnam, quasi at corporis ipsam quisquam
                    deleniti molestias in facere excepturi, dolore quibusdam
                    dolorem delectus temporibus incidunt quas harum iure!
                  </div>
                </Marquee>
              </div>
            </div>
          </div>

          <ul className="flex flex-row justify-end">
            <li className="text-[16px] mr-3 text-bold hover:rotate-6 text-right bg-white px-2 py-1 border hover:shadow-md duration-200 border-black">
              聯絡CHEEK
            </li>
            <li className=" mr-3 text-bold bg-white hover:rotate-6 text-right  text-[16px] px-2 py-1 border hover:shadow-md duration-200 border-black">
              Line
            </li>
            <li className="text-[16px] mr-3 text-bold hover:rotate-6 text-right bg-white px-2 py-1 border hover:shadow-md duration-200 border-black">
              Email
            </li>
          </ul>
        </div>
      </footer>
      <div className="  w-[100vw]">
        <Marquee>
          {" "}
          <div className="py-2 text-white bg-black">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
            repellat asperiores excepturi, adipisci inventore expedita?
            Consequuntur consectetur aspernatur magni, quo minima nesciunt nemo
            veritatis necessitatibus provident recusandae fuga reiciendis
            ducimus.
          </div>
        </Marquee>
      </div>
    </>
  );
};
