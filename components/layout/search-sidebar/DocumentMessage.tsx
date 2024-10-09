import { getTranslation } from "@/i18n";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";

import Spinner from "@/components/shared/Spinner";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

interface props {
  className?: string;
}

const DocumentMessage = ({ className }: props) => {
  const { t } = getTranslation();
  const { toast } = useToast();
  const [complaint, setComplaint] = useState("");

  const sendComplaint = () => {
    toast({
      title: t("successfully_sent"),
      className:
        "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4 bg-green-500 border-none text-white",
    });
  };
  return (
    <div className={cn(className, "")}>
      <p className="text-gray-700 font-medium text-lg">
        {t("document_complaint")}
      </p>
      <div className="mt-2">
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
            {false && <Spinner />}
            {t("send")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DocumentMessage;
