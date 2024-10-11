"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "../ui/input";
import useContactStore from "@/store/contact/contact";
import ButtonCustom from "@/components/global/button";
import useOrderDocument from "@/store/order-document/order-document";
import React from "react";
import Loading from "@/app/(root)/loading";
import { getTranslation } from "@/i18n";
import { PhoneInput } from "react-international-phone";
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
  email: z.string().email({
    message: t("required"),
  }),
  case: z.string(),
  file: z.any().optional(),
  yourMessage: z.string().min(3, {
    message: t("required"),
  }),
});

export function ContactForm() {
  const { t } = getTranslation();

  const { postContact, loading } = useContactStore();
  const {
    document_category,
    loading: loadingOrder,
    fetchDocumentCategory,
  } = useOrderDocument();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phoneNumber: "+998",
      email: "",
      case: "",
      yourMessage: "",
      file: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // const data: IContact = {
    //   full_name: values.fullName,
    //   email: values.email,
    //   phone: values.phoneNumber.slice(1),
    //   type: Number(values.case),
    //   message: values.yourMessage,
    // };
    const PForm = new FormData();
    PForm.append("full_name", values.fullName);
    PForm.append("email", values.email);
    PForm.append("phone", values.phoneNumber.slice(1));
    PForm.append("type", values.case);
    PForm.append("file", values.file);
    PForm.append("message", values.yourMessage);
    postContact(PForm)
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

  // useEffect(() => {
  //   if (document_category?.length === 0) {
  //     fetchDocumentCategory();
  //   }
  // }, [fetchDocumentCategory]);

  if (loadingOrder) return <Loading />;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder={t("full_name")}
                  {...field}
                  className="h-12 w-full rounded-none border-DEFAULT border-[#e8e6e6] bg-white px-4 py-2 font-medium text-background placeholder:text-base placeholder:font-normal placeholder:text-background/50 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <PhoneInput
                  hideDropdown={true}
                  inputClassName={
                    "h-12 w-full rounded-none !border  bg-white px-4 py-2 font-medium text-background placeholder:text-base placeholder:font-normal placeholder:text-background/50 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
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

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="email"
                  placeholder={t("email")}
                  {...field}
                  className="h-12 w-full rounded-none border-DEFAULT border-[#e8e6e6] bg-white px-4 py-2 font-medium text-background placeholder:text-base placeholder:font-normal placeholder:text-background/50 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/*<FormField*/}
        {/*  control={form.control}*/}
        {/*  name="case"*/}
        {/*  render={({ field }) => (*/}
        {/*    <FormItem>*/}
        {/*      <FormControl>*/}
        {/*        <Select*/}
        {/*          onValueChange={field.onChange}*/}
        {/*          defaultValue={field.value}*/}
        {/*        >*/}
        {/*          <SelectTrigger className="h-12 w-full rounded-none border-DEFAULT border-[#e8e6e6] bg-white px-4 py-2 text-base text-background placeholder:font-normal placeholder:text-background/50 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0">*/}
        {/*            <SelectValue*/}
        {/*              placeholder={t("type_request")}*/}
        {/*              className="font-normal !placeholder:text-background/50"*/}
        {/*            />*/}
        {/*          </SelectTrigger>*/}
        {/*          <SelectContent>*/}
        {/*            {document_category?.map((document) => (*/}
        {/*              <SelectItem*/}
        {/*                key={document.id}*/}
        {/*                value={document.id.toString()}*/}
        {/*              >*/}
        {/*                {document.category_name}*/}
        {/*              </SelectItem>*/}
        {/*            ))}*/}
        {/*          </SelectContent>*/}
        {/*        </Select>*/}
        {/*      </FormControl>*/}
        {/*      <FormMessage />*/}
        {/*    </FormItem>*/}
        {/*  )}*/}
        {/*/>*/}

        <FormField
          control={form.control}
          name="file"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder={t("download_file")}
                  type="file"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    form.setValue("file", e.target?.files?.[0])
                  }
                  className="h-12 w-full rounded-none border-DEFAULT border-[#e8e6e6] bg-white px-4 pb-2 pt-[14px] cursor-pointer   placeholder:font-normal !text-background/50 placeholder:text-background/50 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="yourMessage"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder={t("write_your_message")}
                  {...field}
                  className="h-48 w-full resize-none rounded-none border-DEFAULT border-[#e8e6e6] bg-white px-4 py-2 font-medium text-background placeholder:text-base placeholder:font-normal placeholder:text-background/50 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <ButtonCustom text={t("send")} disabled={loading} loading={loading} />
      </form>
    </Form>
  );
}
