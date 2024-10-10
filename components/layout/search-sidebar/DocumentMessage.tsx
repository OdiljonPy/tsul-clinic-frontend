import { getTranslation } from "@/i18n";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";

import Spinner from "@/components/shared/Spinner";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import useComplaintStore from "@/store/complaint-docs/complaint-docs";
import { ICheckDocument } from "@/types/check-document/check-document";
import { IComplaintDocs } from "@/types/complaint-docs/complaint-docs";
import { ChevronDown } from "lucide-react";
import { toast } from "react-toastify";

interface props {
  className?: string;
  documentInfo: ICheckDocument;
}

const DocumentMessage = ({ className, documentInfo }: props) => {
  const { t } = getTranslation();

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
          toast.success(t("successfully_sent"));
        }
      })
      .catch(() => {
        toast.error(t("something_went_wrong"));
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
