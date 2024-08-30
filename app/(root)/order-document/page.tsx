"use client";

import InnerBanner from "@/components/global/inner-banner";
import React, { useState } from "react";
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

const formSchema = z.object({
  fullName: z.string().min(3, {
    message: "First Name must be at least 3 characters.",
  }),
  phoneNumber: z.string().max(13).min(9, {
    message: "Invalid phone number",
  }),
  type: z.string().min(1, { message: "Please select an option" }),
  message: z.string().min(15),
});

const OrderDocument = () => {
  const { toast } = useToast();

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

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values, "form Values");
    toast({
      title: "Form Submitted Successfully.",
      className:
        "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4 bg-background text-white",
    });
  }
  return (
    <div>
      <InnerBanner text="Hujjat buyurtma berish" />
      <div className="container sm:pt-14 md:pt-20 pt-8 pb-7">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-8">
            <PrimaryHeadline
              text="Qanday hujjat kerak?"
              headlineType="h3"
              additionalClass="text-[32px] primary-headline-left text-background"
              formatTwoColor
            />
            <RadioGroup
              defaultValue={radioValue}
              onValueChange={setRadioValue}
              className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3"
            >
              {orderDocumentData.map((document) => (
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
                    {document.name}
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
                      Document Type
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
                                <SelectValue placeholder="Choose document type" />
                              </SelectTrigger>
                              <SelectContent>
                                {orderDocumentData
                                  .find(
                                    (item) => item.id === Number(radioValue),
                                  )
                                  ?.documents.map((document) => (
                                    <SelectItem value={document.id.toString()}>
                                      {document.name}
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
                  <div>
                    <FormLabel
                      htmlFor="fullName"
                      className="text-background mb-3 inline-block"
                    >
                      Full Name
                    </FormLabel>
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="Enter your full name"
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
                      Phone Number
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
                      Message
                    </FormLabel>
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Textarea
                              placeholder="Type your message here."
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
                    className="h-auto rounded-none border bg-primary-main px-7 py-[14px] text-base font-bold uppercase text-white transition-colors duration-300 ease-in hover:border-primary-main hover:bg-white hover:text-primary-main"
                  >
                    Yuborish
                  </Button>
                </form>
              </Form>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4">
            <div className="">
              <PrimaryHeadline
                text="Recent Posts"
                headlineType="h3"
                additionalClass="text-[32px] primary-headline-left text-background"
                formatTwoColor
              />
              <ul>
                {blogPosts.slice(0, 5).map((item) => (
                  <li
                    className="relative border-b border-[#313131] py-4 pl-6"
                    key={item.id}
                  >
                    <Link
                      href="/blog/1"
                      className="text-base leading-6 text-[#313131] hover:text-primary-main"
                    >
                      <ChevronRight
                        size={20}
                        className="absolute left-0 top-[30px] -translate-y-1/2 font-bold"
                      />
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDocument;
