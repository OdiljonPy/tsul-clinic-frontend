"use client";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import React, { useEffect, useState } from "react";
import { getTranslation } from "@/i18n";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Spinner from "@/components/shared/Spinner";
import { ratingList } from "@/lib/data";
import useRatingStore from "@/store/rating/rating";
import Loading from "@/app/(root)/loading";
import { IRatedData } from "@/types/rating/rating";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const Page = ({ params }: { params: { id: string } }) => {
  const { t } = getTranslation();
  const router = useRouter();

  const { loading, isRated, fetchRatedCheck, sendLoad, postRating } =
    useRatingStore();

  const [rating, setRating] = useState(5);
  const [description, setDescription] = useState("");

  const onSubmit = () => {
    const data: IRatedData = {
      rating,
      description,
    };
    postRating({ id: Number(params.id), data })
      .then((res) => {
        if (res?.ok) {
          toast.success(t("successfully_sent"));
        }
      })
      .catch(() => {
        toast.error(t("something_went_wrong"));
      })
      .finally(() => {
        setTimeout(() => router.push("/"), 1000);
      });
  };

  useEffect(() => {
    fetchRatedCheck(Number(params.id));
  }, [fetchRatedCheck]);

  if (loading) return <Loading />;

  return (
    <div className="container my-6">
      {!isRated ? (
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
                  className="text-primary-main group-hover:text-primary-main checked:border-primary-main"
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
              value={description}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setDescription(e.target.value)
              }
              placeholder={t("enter_your_opinion")}
              className="h-40 w-full resize-none rounded-none border-DEFAULT border-[#e8e6e6] bg-white px-4 py-2 font-medium text-background  placeholder:font-normal placeholder:text-background/50 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            <Button
              type="submit"
              onClick={() => onSubmit()}
              disabled={description.length < 5}
              className="h-auto mt-2 rounded-none border bg-primary-main px-7 py-[14px] text-base font-bold uppercase text-white transition-colors duration-300 ease-in hover:border-primary-main hover:bg-white hover:text-primary-main flex items-center gap-2"
            >
              {sendLoad && <Spinner />}
              {t("send")}
            </Button>
          </div>
        </div>
      ) : (
        <div className="p-4 border rounded-xl shadow min-h-[150px] flex justify-center items-center">
          <div>
            <p className="text-xl sm:text-2xl font-medium text-center">
              {t("rated_text")}
            </p>
            <div className="flex justify-center mt-3 sm:mt-4">
              <Button className="mx-auto" onClick={() => router.push("/")}>
                {t("back_to_home")}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
