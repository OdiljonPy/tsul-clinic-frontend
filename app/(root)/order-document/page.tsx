"use client";

import InnerBanner from "@/components/global/inner-banner";
import React, { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import PrimaryHeadline from "@/components/global/primary-headline";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import useOrderDocument from "@/store/order-document/order-document";
import Loading from "@/app/(root)/loading";
import { IDocumentCategory } from "@/types/order-document/document-category";
import Spinner from "@/components/shared/Spinner";
import Sidebar from "@/components/blog/Sidebar";
import { getTranslation } from "@/i18n";
import { PhoneInput } from "react-international-phone";
import { formatNumberWithSpices } from "@/utility/formatNumberWithSpices";
import { toast } from "react-toastify";

const { t } = getTranslation();

const formSchema = z.object({
  fullName: z.string().min(3, {
    message: t("required"),
  }),
  phoneNumber: z
    .string()
    .startsWith("+998")
    .max(13)
    .min(9, {
      message: t("invalid_phone"),
    }),
  type: z.string().min(1, { message: t("select_required") }),
  file: z.any().optional(),
  message: z.string().min(3),
});

const OrderDocument = () => {
  const { t } = getTranslation();
  const {
    loading,
    creatLoading,

    createOrderDocument,
    error,
  } = useOrderDocument();

  const [radioValue, setRadioValue] = useState("1");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phoneNumber: "+998",
      file: "",
      type: "",
      message: "",
    },
  });

  const documentType = form.watch("type");

  function onSubmit(values: z.infer<typeof formSchema>) {
    const PForm = new FormData();
    PForm.append("customer_full_name", values.fullName);
    PForm.append("customer_phone", values.phoneNumber.slice(1));
    PForm.append("customer_message", values.message);
    PForm.append("document_category", radioValue);
    PForm.append("document_type", values.type);
    PForm.append("file", values.file);
    createOrderDocument(PForm)
      .then((res) => {
        if (res?.ok) {
          toast.success(t("successfully_sent"));
        } else {
          toast.error(t("something_went_wrong"));
        }
      })
      .catch(() => {
        toast.error(t("something_went_wrong"));
      })
      .finally(() => {
        form.reset();
      });
  }

  if (loading) return <Loading />;
  if (error) throw new Error();
  return (
    <div>
      <InnerBanner text={t("order_document")} />
      <div className="container sm:pt-14 md:pt-20 pt-8 pb-7">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-8">
            <PrimaryHeadline
              text={t("what_document_need")}
              headlineType="h3"
              additionalClass="text-[32px] primary-headline-left text-background"
              formatTwoColor
            />
            <div className="mt-6">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <div>
                    <FormLabel
                      htmlFor="fullName"
                      className="text-background mb-3 inline-block"
                    >
                      {t("full_name")}
                    </FormLabel>
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder={t("enter_fullName")}
                              {...field}
                              className="h-12 w-full rounded-none border-DEFAULT border-[#e8e6e6] bg-white px-4 py-2 font-medium text-background  placeholder:font-normal placeholder:text-background/50 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div>
                    <FormLabel
                      htmlFor="phoneNumber"
                      className="text-background mb-3 inline-block"
                    >
                      {t("type_appeal")}
                    </FormLabel>
                    <FormField
                      control={form.control}
                      name="type"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder={t("type_appeal")}
                              {...field}
                              className="h-12 w-full rounded-none border-DEFAULT border-[#e8e6e6] bg-white px-4 py-2 font-medium text-background placeholder:text-base placeholder:font-normal placeholder:text-background/50 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div>
                    <FormLabel
                      htmlFor="phoneNumber"
                      className="text-background mb-3 inline-block"
                    >
                      {t("phone_number")}
                    </FormLabel>
                    <FormField
                      control={form.control}
                      name="phoneNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <PhoneInput
                              hideDropdown={true}
                              inputClassName={
                                "h-12 !mt-[-10px] w-full rounded-none !border  bg-white px-4 py-2 font-medium text-background placeholder:text-base placeholder:font-normal placeholder:text-background/50 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                              }
                              defaultCountry="uz"
                              inputProps={{
                                placeholder: "+998 90 123 45 67",
                              }}
                              value={field.value}
                              onChange={(value) => field.onChange(value)}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div>
                    <FormLabel
                      htmlFor="file"
                      className="text-background mb-3 inline-block"
                    >
                      {t("download_file")}
                    </FormLabel>
                    <FormField
                      control={form.control}
                      name="file"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder={t("download_file")}
                              type="file"
                              onChange={(
                                e: React.ChangeEvent<HTMLInputElement>,
                              ) => form.setValue("file", e.target?.files?.[0])}
                              className="h-12 w-full rounded-none border-DEFAULT border-[#e8e6e6] bg-white px-4 pb-2 pt-[14px] cursor-pointer font-medium text-background  placeholder:font-normal placeholder:text-background/50 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div>
                    <FormLabel
                      htmlFor="message"
                      className="text-background mb-3 inline-block"
                    >
                      {t("message")}
                    </FormLabel>
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Textarea
                              placeholder={t("enter_your_message")}
                              {...field}
                              className="h-48 w-full resize-none rounded-none border-DEFAULT border-[#e8e6e6] bg-white px-4 py-2 font-medium text-background  placeholder:font-normal placeholder:text-background/50 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={creatLoading}
                    className="h-auto rounded-none border bg-primary-main px-7 py-[14px] text-base font-bold uppercase text-white transition-colors duration-300 ease-in hover:border-primary-main hover:bg-white hover:text-primary-main flex items-center gap-2"
                  >
                    {creatLoading && <Spinner />}
                    {t("send")}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDocument;
