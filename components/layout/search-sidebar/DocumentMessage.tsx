import { getTranslation } from "@/i18n";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";

import Spinner from "@/components/shared/Spinner";
import { Button } from "@/components/ui/button";
import React, { useRef, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import useComplaintStore from "@/store/complaint-docs/complaint-docs";
import { ICheckDocument } from "@/types/check-document/check-document";
import { IComplaintDocs } from "@/types/complaint-docs/complaint-docs";
import { ChevronDown } from "lucide-react";

interface props {
  className?: string;
  documentInfo: ICheckDocument;
}

const DocumentMessage = ({ className, documentInfo }: props) => {
  const { t } = getTranslation();
  const { toast } = useToast();

  const { postComplaint, loading } = useComplaintStore();

  const [complaint, setComplaint] = useState("");
  const [open, setOpen] = useState(false);

  const sendComplaint = () => {
    const data: IComplaintDocs = {
      complaint,
      order_document: +documentInfo.order_number,
    };
    postComplaint({ id: documentInfo.id, data })
      .then((res) => {
        if (res.ok) {
          toast({
            title: t("successfully_sent"),
            className:
              "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4 bg-green-500 border-none text-white",
          });
        }
      })
      .catch(() => {
        toast({
          title: t("something_went_wrong"),
          className:
            "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4 bg-red-500 border-none text-white",
        });
      })
      .finally(() => {
        setComplaint("");
        setOpen(false);
      });
  };
  return (
    <div className={cn(className, "")}>
      <div
        className="flex items-center gap-3 cursor-pointer group text-gray-700 hover:text-primary-main"
        onClick={() => setOpen(!open)}
      >
        <p className="transition-all duration-300 font-medium text-lg ">
          {t("document_complaint")}
        </p>
        <ChevronDown
          className={`transition-all duration-300  ${open ? "rotate-180" : "rotate-0"}`}
        />
      </div>
      <div
        className={`mt-2 transition-all duration-500 ease-in h-0 overflow-hidden ${open ? "h-[230px]" : ""}`}
      >
        <Textarea
          placeholder={t("enter_your_complaint")}
          value={complaint}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setComplaint(e.target.value)
          }
          className="h-40 w-full resize-none rounded-none border-DEFAULT border-[#e8e6e6] bg-white px-4 py-2 font-medium text-background placeholder:text-base placeholder:font-normal placeholder:text-background/50 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
        />
        <div className="flex justify-end mt-2">
          <Button
            onClick={sendComplaint}
            disabled={!complaint}
            className="h-auto rounded-none border bg-primary-main px-7 py-[14px] text-base font-bold uppercase text-white transition-colors duration-300 ease-in hover:border-primary-main hover:bg-white hover:text-primary-main flex items-center gap-2 disabled:cursor-not-allowed"
          >
            {loading && <Spinner />}
            {t("send")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DocumentMessage;
