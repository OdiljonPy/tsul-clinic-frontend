"use client";

import { blogPosts } from "@/lib/data";
import BlogCard from "../shared/BlogCard";
import ButtonCustom from "../global/button";
import PrimaryHeadline from "../global/primary-headline";
import useNewsStore from "@/store/news/news";
import { useEffect } from "react";
import Loading from "@/app/(root)/loading";

const BlogPosts = () => {
  const { news, loading, fetchNews } = useNewsStore();

  useEffect(() => {
    fetchNews(1, 6);
  }, [fetchNews]);

  if (loading) return <Loading />;
  return (
    <>
      <div className="relative bg-grey py-14 sm:py-20">
        <div className="container">
          <PrimaryHeadline text="Yangiliklar & Maqolalar" />
          <div className="grid  gap-7 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {news?.content?.map((item) => (
              <BlogCard
                key={`blog${item.id}`}
                imageURL={item.image}
                date={item.created_at}
                linkHref={`/blog/${item.id}`}
                title={item.title}
              />
            ))}
          </div>
          <div className="mt-12 text-center">
            <ButtonCustom
              href="/blog"
              text="Ko'proq o'qish"
              buttonType="dark"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPosts;
