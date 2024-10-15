"use client";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { languageList } from "@/components/layout/language-switcher/LanguageSwitcher";
import React, { useState } from "react";
import { getTranslation } from "@/i18n";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Spinner from "@/components/shared/Spinner";

const Page = ({ params }: { params: { id: string } }) => {
  const { t } = getTranslation();
  const ratingList = [
    {
      id: 1,
      text: "1 baho",
    },
    {
      id: 2,
      text: "2 baho",
    },
    {
      id: 3,
      text: "3 baho",
    },
    {
      id: 4,
      text: "4 baho",
    },
    {
      id: 5,
      text: "5 baho",
    },
  ];
  const [rating, setRating] = useState(5);
  const [review, setReview] = useState("");
  return (
    <div className="container my-6">
      <div className="p-4 border rounded-xl shadow">
        <p className="font-medium text-lg sm:text-xl">{t("rating5")}</p>
        <RadioGroup
          className="flex flex-col gap-2 mt-2"
          defaultValue={rating.toString()}
        >
          {ratingList?.map((rating) => (
            <div
              key={rating.id}
              className="flex gap-2 items-center cursor-pointer group"
            >
              <RadioGroupItem
                value={rating.id.toString()}
                id={rating.id.toString()}
                className="text-primary-main inline-block group-hover:text-primary-main checked:border-primary-main"
              />
              <label
                htmlFor={rating.id.toString()}
                className="group-hover:text-primary-main cursor-pointer transition duration-300 "
              >
                {t(rating.text)}
              </label>
            </div>
          ))}
        </RadioGroup>
        <div className="mt-2">
          <p className="font-medium text-lg">
            {t("write_note")} <sup className="text-red-500">*</sup>
          </p>
          <Textarea
            value={review}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setReview(e.target.value)
            }
            placeholder={t("enter_your_opinion")}
            className="h-40 w-full resize-none rounded-none border-DEFAULT border-[#e8e6e6] bg-white px-4 py-2 font-medium text-background  placeholder:font-normal placeholder:text-background/50 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          <Button
            type="submit"
            disabled={review.length < 5}
            className="h-auto mt-2 rounded-none border bg-primary-main px-7 py-[14px] text-base font-bold uppercase text-white transition-colors duration-300 ease-in hover:border-primary-main hover:bg-white hover:text-primary-main flex items-center gap-2"
          >
            {false && <Spinner />}
            {t("send")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
