"use client";

import Image from "next/image";
import { URLParams } from "@/types";
import { formatDate } from "@/lib/utilFunctons";

import Sidebar from "@/components/blog/Sidebar";
import { Calendar } from "lucide-react";
import useNewsStore from "@/store/news/news";
import { useEffect } from "react";
import Loading from "@/app/(root)/loading";

const Page = ({ params }: URLParams) => {
  const { news_detail, loading, error, fetchNewsDetail } = useNewsStore();

  useEffect(() => {
    fetchNewsDetail(+params.id);
  }, [params.id]);

  if (loading) return <Loading />;
  if (error) throw new Error();
  return (
    <>
      <div className="relative py-[90px]">
        <div className="container">
          <div className="flex flex-wrap lg:flex-nowrap">
            <div className="basis-full pr-0 lg:basis-[70%] lg:pr-8">
              <div className="relative mb-0 pb-0 before:absolute before:bottom-0 before:left-0 lg:mb-12 lg:pb-12">
                <div>
                  <Image
                    src={news_detail.image}
                    width={1000}
                    height={500}
                    alt="Home BLog Post"
                    className="w-full object-cover h-[340px] sm:h-[500px]"
                  />
                  <div className=" bg-white">
                    <h2 className="my-6 text-[25px] font-bold capitalize leading-9 text-background sm:text-[32px]">
                      {news_detail.title}
                    </h2>
                    <ul className="flex flex-wrap pb-6 sm:flex-nowrap">
                      <li className="mb-4 mr-5 flex basis-full items-center sm:mb-0 sm:basis-auto">
                        <Calendar className="w-5" />
                        <span className="pl-2 text-base text-[#313131]">
                          {formatDate(news_detail.created_at)}
                        </span>
                      </li>
                    </ul>

                    <div
                      dangerouslySetInnerHTML={{ __html: news_detail.content }}
                      className="text-base leading-[1.62] text-[#333] v-html"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
