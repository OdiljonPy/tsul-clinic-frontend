import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import ButtonCustom from "@/components/global/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import { useEffect } from "react";
import {
  ICreateMeeting,
  MeetingType,
} from "@/types/create-meeting/create-meeting";
import useCreateMeetingStore from "@/store/create-meeting/create-meeting";
import { getTranslation } from "@/i18n";
import { PhoneInput } from "react-international-phone";
import { toast } from "react-toastify";

const { t } = getTranslation();

interface props {
  open: boolean;
  setOpen: (open: boolean) => void;
  type: MeetingType;
}

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
});

const ApplicationModal = ({ open, setOpen, type }: props) => {
  const { t } = getTranslation();

  const { postCreateMeeting, loading } = useCreateMeetingStore();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phoneNumber: "+998",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const data: ICreateMeeting = {
      customer_full_name: values.fullName,
      customer_phone: values.phoneNumber.slice(1),
      meeting_type: type,
    };

    postCreateMeeting(data)
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
        setOpen(false);
      });
  }

  useEffect(() => {
    if (!open) form.reset();
  }, [open]);

  return (
    <div className="bg-white">
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent className={"bg-white !p-5"}>
          <AlertDialogHeader>
            <X
              className="absolute top-2 right-2 cursor-pointer text-gray-700"
              onClick={() => setOpen(false)}
            />
            <AlertDialogTitle>
              <div className="text-center font-medium text-2xl">
                {type === MeetingType.phone ? t("call_phone") : t("call_video")}
              </div>
            </AlertDialogTitle>
            <AlertDialogDescription>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="flex flex-col gap-4 mt-3"
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
                              placeholder={t("full_name")}
                              {...field}
                              className="h-12 w-full rounded-none border-DEFAULT border-black bg-white px-4 py-2 font-medium text-background placeholder:text-base placeholder:font-normal placeholder:text-background/50 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
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
                                "h-12 w-full rounded-none !border !border-black bg-white px-4 py-2 font-medium text-background placeholder:text-base placeholder:font-normal placeholder:text-background/50 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
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
                  <div className="flex justify-center mt-4">
                    <ButtonCustom
                      text={t("send")}
                      type="submit"
                      disabled={loading}
                      loading={loading}
                    />
                  </div>
                </form>
              </Form>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter></AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default ApplicationModal;
