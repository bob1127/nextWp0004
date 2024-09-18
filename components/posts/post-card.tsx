import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Post } from "@/lib/wordpress.d";
import { cn } from "@/lib/utils";
import {
  getFeaturedMediaById,
  getAuthorById,
  getCategoryById,
} from "@/lib/wordpress";

// 將文本中前 12 個中文字提取出來的函數
const truncateChineseText = (text: string, length: number): string => {
  // 使用正則表達式來找到所有中文字
  const chineseChars = text.match(/[\u4e00-\u9fff]/g) || [];
  // 擷取前 length 個中文字
  const truncatedText = chineseChars.slice(0, length).join("");
  // 若中文字超過 length，則加上省略號
  return truncatedText + (chineseChars.length > length ? "..." : "");
};

export default async function PostCard({ post }: { post: Post }) {
  // 獲取所需的數據
  const media = await getFeaturedMediaById(post.featured_media);
  const author = await getAuthorById(post.author);
  const date = new Date(post.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const category = await getCategoryById(post.categories[0]);

  // 使用自定義函數擷取前 12 個中文字
  const truncatedExcerpt = truncateChineseText(post.excerpt.rendered, 12);

  return (
    <Link
      href={`/posts/${post.slug}`}
      className={cn(
        "border p-4 bg-[#f6f7f9] rounded-lg group flex justify-between flex-col not-prose gap-8",
        "hover:bg-[#ebecee] transition-all"
      )}
    >
      <div className="flex flex-col gap-4">
        <div className="h-48 w-full overflow-hidden relative rounded-md border flex items-center justify-center">
          <Image
            className="h-full w-full object-cover"
            src={media.source_url}
            alt={post.title.rendered}
            width={400}
            height={200}
          />
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          className="text-xl text-primary font-medium group-hover:underline decoration-muted-foreground underline-offset-4 decoration-dotted transition-all"
        ></div>
        <div
          className="text-sm"
          dangerouslySetInnerHTML={{ __html: truncatedExcerpt }}
        ></div>
      </div>

      <div className="flex flex-col gap-4">
        <hr />
        <div className="flex justify-between items-center text-xs">
          <p>{category.name}</p>
          <p>{date}</p>
        </div>
      </div>
    </Link>
  );
}
