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
import { useToast } from "@/components/ui/use-toast";

import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import { useEffect } from "react";
import {
  ICreateMeeting,
  MeetingType,
} from "@/types/create-meeting/create-meeting";
import useCreateMeetingStore from "@/store/create-meeting/create-meeting";

interface props {
  open: boolean;
  setOpen: (open: boolean) => void;
  type: MeetingType;
}

const formSchema = z.object({
  fullName: z.string().min(3, {
    message: "First Name must be at least 3 characters.",
  }),
  phoneNumber: z.string().max(13).min(9, {
    message: "Invalid phone number",
  }),
});

const ApplicationModal = ({ open, setOpen, type }: props) => {
  const { toast } = useToast();

  const { postCreateMeeting, loading } = useCreateMeetingStore();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phoneNumber: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const data: ICreateMeeting = {
      customer_full_name: values.fullName,
      customer_phone: values.phoneNumber,
      meeting_type: type,
    };

    postCreateMeeting(data)
      .then((res) => {
        console.log(res, "res");
        if (res?.ok) {
          toast({
            title: "Form Submitted Successfully.",
            className:
              "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4 bg-green-500 text-white",
          });
        } else {
          toast({
            title: "Something went wrong",
            className:
              "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4 bg-red-500 text-white",
          });
        }
      })
      .catch(() => {
        toast({
          title: "Something went wrong",
          className:
            "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4 bg-red-500 text-white",
        });
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
                {type === MeetingType.phone
                  ? "Telefon orqali murojat qilish"
                  : "Video orqali murojat qilish"}
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
                      Full Name
                    </FormLabel>
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="Full Name"
                              {...field}
                              className="h-12 w-full rounded-none border-DEFAULT border-black bg-white px-4 py-2 font-medium text-background placeholder:text-base placeholder:font-normal placeholder:text-background focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
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
                              placeholder="Phone Number"
                              {...field}
                              className="h-12 w-full rounded-none border-DEFAULT border-black bg-white px-4 py-2 font-medium text-background placeholder:text-base placeholder:font-normal placeholder:text-background focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex justify-center mt-4">
                    <ButtonCustom
                      text="Jo'natish"
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
