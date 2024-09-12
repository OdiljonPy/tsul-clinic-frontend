"use client";

import InnerBanner from "@/components/global/inner-banner";
import React, { useEffect, useState } from "react";
import { blogPosts, orderDocumentData } from "@/lib/data";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import PrimaryHeadline from "@/components/global/primary-headline";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
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
import { useToast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import useOrderDocument from "@/store/order-document/order-document";
import Loading from "@/app/(root)/loading";
import { IPostOrderDocument } from "@/types/order-document/document-category";
import Spinner from "@/components/shared/Spinner";
import Sidebar from "@/components/blog/Sidebar";
import { getTranslation } from "@/i18n";

const formSchema = z.object({
  fullName: z.string().min(3, {
    message: "First Name must be at least 3 characters.",
  }),
  phoneNumber: z.string().max(13).min(9, {
    message: "Invalid phone number",
  }),
  type: z.string().min(1, { message: "Please select an option" }),
  message: z.string().min(10),
});

const OrderDocument = () => {
  const { toast } = useToast();
  const { t } = getTranslation();
  const {
    loading,
    creatLoading,
    document_category,
    fetchDocumentCategory,
    createOrderDocument,
    error,
  } = useOrderDocument();

  const [radioValue, setRadioValue] = useState("1");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      type: "",
      message: "",
    },
  });

  const documentType = form.watch("type");

  function onSubmit(values: z.infer<typeof formSchema>) {
    const orderDocumentData: IPostOrderDocument = {
      customer_full_name: values.fullName,
      customer_phone: values.phoneNumber,
      customer_message: values.message,
      document_category: Number(radioValue),
      document_type: Number(values.type),
    };
    createOrderDocument(orderDocumentData)
      .then((res) => {
        if (res?.ok) {
          toast({
            title: t("successfully_sent"),
            className:
              "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4 bg-green-500 text-white",
          });
        } else {
          toast({
            title: t("something_went_wrong"),
            className:
              "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4 bg-red-500 text-white",
          });
        }
      })
      .catch(() => {
        toast({
          title: t("something_went_wrong"),
          className:
            "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4 bg-red-500 text-white",
        });
      })
      .finally(() => {
        form.reset();
      });
  }

  useEffect(() => {
    if (document_category?.length === 0) fetchDocumentCategory();
  }, [fetchDocumentCategory]);

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
            <RadioGroup
              defaultValue={radioValue}
              onValueChange={setRadioValue}
              className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3"
            >
              {document_category?.map((document) => (
                <div
                  key={document.id}
                  className="flex gap-2 items-center cursor-pointer group"
                >
                  <RadioGroupItem
                    value={String(document.id)}
                    id={String(document.id)}
                    className="text-primary-main group-hover:text-primary-main checked:border-primary-main"
                  />
                  <label
                    htmlFor={String(document.id)}
                    className="group-hover:text-primary-main cursor-pointer transition duration-300"
                  >
                    {document.category_name}
                  </label>
                </div>
              ))}
            </RadioGroup>
            <div className="mt-6">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <div>
                    <FormLabel
                      htmlFor="type"
                      className="text-background mb-3 inline-block"
                    >
                      {t("document_type")}
                    </FormLabel>
                    <FormField
                      control={form.control}
                      name="type"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <SelectTrigger className="h-12 w-full rounded-none border-DEFAULT border-[#e8e6e6] bg-white px-4 py-2 text-base text-background placeholder:text-background focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0">
                                <SelectValue
                                  placeholder={t("choose_document_type")}
                                />
                              </SelectTrigger>
                              <SelectContent>
                                {document_category
                                  ?.find(
                                    (item) => item.id === Number(radioValue),
                                  )
                                  ?.document_type?.map((document) => (
                                    <SelectItem value={document.id.toString()}>
                                      {document.document_name}
                                    </SelectItem>
                                  ))}
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  {documentType && (
                    <div className="flex justify-between">
                      <p className="text-background">{t("service_price")}</p>
                      <p className="text-background">
                        {document_category.length &&
                          document_category
                            ?.find(
                              (document) => document.id === Number(radioValue),
                            )
                            ?.document_type?.find(
                              (item) => item.id === Number(documentType),
                            )?.price}{" "}
                        USZ
                      </p>
                    </div>
                  )}
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
                              className="h-12 w-full rounded-none border-DEFAULT border-[#e8e6e6] bg-white px-4 py-2 font-medium text-background  placeholder:font-normal placeholder:text-background focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
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
                            <Input
                              placeholder="+99 123-45-67"
                              {...field}
                              className="h-12 w-full rounded-none border-DEFAULT border-[#e8e6e6] bg-white px-4 py-2 font-medium text-background  placeholder:font-normal placeholder:text-background focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
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
                              className="h-48 w-full resize-none rounded-none border-DEFAULT border-[#e8e6e6] bg-white px-4 py-2 font-medium text-background  placeholder:font-normal placeholder:text-background focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
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
