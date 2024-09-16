import {
  getPostBySlug,
  getFeaturedMediaById,
  getAuthorById,
  getCategoryById,
} from "@/lib/wordpress";
import Marquee from "react-fast-marquee";
import { Section, Container, Article, Main } from "@/components/craft";
import { Metadata } from "next";
import { badgeVariants } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

import Link from "next/link";
import Balancer from "react-wrap-balancer";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  return {
    title: post.title.rendered,
    description: post.excerpt.rendered,
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  const featuredMedia = await getFeaturedMediaById(post.featured_media);
  const author = await getAuthorById(post.author);
  const date = new Date(post.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const category = await getCategoryById(post.categories[0]);

  return (
    <div className="bg-[#f3f4f6] flex justify-center">
      <div className="mx-auto  md:max-w-5xl 2xl:max-w-7xl">
        <Section>
          <Marquee></Marquee>
          <Container>
            <h1>
              <Balancer>
                <span
                  dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                ></span>
              </Balancer>
            </h1>

            <div className="flex justify-between items-center gap-4 text-sm mb-4">
              <h5>
                Published {date} by{" "}
                {author.name && (
                  <span>
                    <a href={`/posts/?author=${author.id}`}>{author.name}</a>{" "}
                  </span>
                )}
              </h5>
              <Link
                href={`/posts/?category=${category.id}`}
                className={cn(
                  badgeVariants({ variant: "outline" }),
                  "not-prose"
                )}
              >
                {category.name}
              </Link>
            </div>
            <div className="h-96 my-12 md:h-[560px] overflow-hidden flex items-center justify-center border rounded-lg bg-accent/25">
              {/* eslint-disable-next-line */}
              <img
                className="w-full"
                src={featuredMedia.source_url}
                alt={post.title.rendered}
              />
            </div>
            <Article
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />
            <section className="section-info relative">
              <div className="img absolute bottom-[-260px] right-[-100px]">
                <img
                  className="w-[400px]"
                  src="https://www.threedee.design/images/Cartoon_Character/Muscular.webp"
                  alt=""
                />
              </div>
              <div className="  flex justify-start flex-col   border pb-[200px] border-[#f1f1f1] bg-white  rounded-2xl p-10">
                <div className="top  ">
                  <h3 className="text-center">INFO</h3>
                </div>

                <div className="bottom  flex-col md:flex-row flex justify-center">
                  <div className="left w-full md:w-1/2 p-10">
                    <p>餐廳資訊：</p>
                    <p>地址：</p>
                    <p>聯絡電話：</p>
                    <p>FB:</p>
                  </div>
                  <div className="right   w-full md:w-1/2 p-10">
                    <div className="map w-full rounded-xl overflow-hidden h-full border border-black"></div>
                  </div>
                </div>
              </div>
            </section>
          </Container>
        </Section>
      </div>
    </div>
  );
}
