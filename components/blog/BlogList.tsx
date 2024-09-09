"use client";

import Link from "next/link";
import { blogPosts } from "@/lib/data";
import Image from "next/image";
import { formatDate } from "@/lib/utilFunctons";
import ButtonCustom from "../global/button";
import { Calendar } from "lucide-react";
import useNewsStore from "@/store/news/news";
import { useEffect } from "react";
import Pagination from "@/components/shared/Pagination";
import { useSearchParams } from "next/navigation";
import Loading from "@/app/(root)/loading";

const BlogList = ({ layoutClass }: { layoutClass: string }) => {
  const searchParams = useSearchParams();
  const { news, loading, fetchNews } = useNewsStore();

  const page = searchParams.get("page") ? Number(searchParams.get("page")) : 1;

  useEffect(() => {
    fetchNews(page, 4);
  }, [fetchNews, page]);

  if (loading) return <Loading />;
  return (
    <div className={`pr-0 lg:pr-8 ${layoutClass}`}>
      {news.content?.map((item) => (
        <div
          className="relative mb-12 pb-12 before:absolute before:bottom-0 before:left-0 before:h-[3px] before:w-full before:bg-background before:content-[''] after:absolute after:bottom-0 after:left-0 after:z-[1] after:h-[3px] after:w-[150px] after:bg-primary-main after:content-['']"
          key={item.id}
        >
          <div className="overflow-hidden">
            <Image
              src={item.image}
              alt="Blog Post Image"
              width={1000}
              height={500}
              className="w-full h-[340px] sm:h-[500px] object-cover"
            />
          </div>
          <div className=" bg-white">
            <h3 className="my-6">
              <Link
                href={`/blog/${item.id}`}
                className="inline-block cursor-pointer text-[25px] font-bold capitalize leading-9 text-background hover:text-primary-main sm:text-[32px]"
              >
                {item.title}
              </Link>
            </h3>
            <ul className="flex flex-wrap pb-6 sm:flex-nowrap">
              <li className="mb-4 mr-5 flex basis-full items-center sm:mb-0 sm:basis-auto">
                <Calendar className="w-5" />
                <Link
                  className="pl-2 text-base text-[#313131] hover:text-primary-main"
                  href="#"
                >
                  {formatDate(item.created_at)}
                </Link>
              </li>
            </ul>
            <p className="text-base text-[#333]">{item.short_description}</p>
            <div className="pt-6 text-right">
              <ButtonCustom
                href={`/blog/${item.id}`}
                buttonType="dark"
                text="Batafsil o'qish"
              />
            </div>
          </div>
        </div>
      ))}
      {news.totalPages > 1 && (
        <Pagination totalPages={news.totalPages} page={news.number} />
      )}
    </div>
  );
};

export default BlogList;
