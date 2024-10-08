import {
  getAllPosts,
  getAllAuthors,
  getAllTags,
  getAllCategories,
} from "@/lib/wordpress";
// import img01 from "https://naotta.synergy-ins.co.jp/wp/wp-content/uploads/2023/10/top-mv01-2-scaled.jpg";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { Section, Container } from "@/components/craft";
import PostCard from "@/components/posts/post-card";
import FilterPosts from "./filter";

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const { author, tag, category, page: pageParam } = searchParams;
  const posts = await getAllPosts({ author, tag, category });
  const authors = await getAllAuthors();
  const tags = await getAllTags();
  const categories = await getAllCategories();

  const page = pageParam ? parseInt(pageParam, 10) : 1;
  const postsPerPage = 9;
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const paginatedPosts = posts.slice(
    (page - 1) * postsPerPage,
    page * postsPerPage
  );

  return (
    <div className="relative ">
      <div className="absolute top-[-220px] z-[-1]">
        <Marquee>
          <div className="flex">
            <div>
              {/* <Image
                src={img01}
                priority
                placeholder="blur"
                alt="Logo"
                width={84}
                height={30.54}
              ></Image> */}
              {/* <img
                src="https://naotta.synergy-ins.co.jp/wp/wp-content/uploads/2023/10/top-mv01-2-scaled.jpg"
                alt=""
                className="w-[450px]"
              /> */}
            </div>
            <div>
              <img
                src="https://naotta.synergy-ins.co.jp/wp/wp-content/themes/sis-delivery/assets/img/top/feature-bg05.jpg"
                alt=""
                className="w-[450px]"
              />
            </div>
            <div>
              <img
                src="https://naotta.synergy-ins.co.jp/wp/wp-content/uploads/2023/10/top-mv01-2-scaled.jpg"
                alt=""
                className="w-[450px]"
              />
            </div>
            <div>
              <img
                src="https://naotta.synergy-ins.co.jp/wp/wp-content/uploads/2023/10/top-mv01-2-scaled.jpg"
                alt=""
                className="w-[450px]"
              />
            </div>
            <div>
              <img
                src="https://naotta.synergy-ins.co.jp/wp/wp-content/uploads/2023/10/top-mv02-3-scaled.jpg"
                alt=""
                className="w-[450px]"
              />
            </div>
          </div>
        </Marquee>
      </div>
      <section className=" section-filter bg-white  border mt-[200px] border-black  rounded-[30px] z-[9999]">
        <Section>
          <Container className="mx-auto max-w-5xl">
            <h1>Posts</h1>

            <FilterPosts
              authors={authors}
              tags={tags}
              categories={categories}
              selectedAuthor={author}
              selectedTag={tag}
              selectedCategory={category}
            />

            {paginatedPosts.length > 0 ? (
              <div className="grid md:grid-cols-3 gap-4 z-0">
                {paginatedPosts.map((post: any) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <div className="h-24 w-full border rounded-lg bg-accent/25 flex items-center justify-center">
                <p>No Results Found</p>
              </div>
            )}

            <div className="mt-8  not-prose">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      className={
                        page === 1 ? "pointer-events-none text-muted" : ""
                      }
                      href={`/posts?page=${Math.max(page - 1, 1)}${
                        category ? `&category=${category}` : ""
                      }${author ? `&author=${author}` : ""}${
                        tag ? `&tag=${tag}` : ""
                      }`}
                    />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href={`/posts?page=${page}`}>
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext
                      className={
                        page === totalPages
                          ? "pointer-events-none text-muted"
                          : ""
                      }
                      href={`/posts?page=${Math.min(page + 1, totalPages)}${
                        category ? `&category=${category}` : ""
                      }${author ? `&author=${author}` : ""}${
                        tag ? `&tag=${tag}` : ""
                      }`}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </Container>
        </Section>
      </section>
    </div>
  );
}
