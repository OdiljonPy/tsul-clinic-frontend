"use client";

import { Search, X } from "lucide-react";
import DocumentNotFound from "@/components/layout/search-sidebar/DocumentNotFound";
import useCheckDocumentStore from "@/store/check-document/check-document";
import { ChangeEvent, useEffect, useState } from "react";
import Spinner from "@/components/shared/Spinner";
import DownloadDocument from "@/components/layout/search-sidebar/DownloadDocument";
import DocumentStatusSection from "@/components/layout/search-sidebar/DocumentStatus";
import { getTranslation } from "@/i18n";
import DocumentMessage from "@/components/layout/search-sidebar/DocumentMessage";

interface props {
  open: boolean;
  setOpen: (e: boolean) => void;
}

const SearchSidebar = ({ open, setOpen }: props) => {
  const { documentInfo, checkDocumentStatus, loading, clearStore } =
    useCheckDocumentStore();

  const { t } = getTranslation();

  const [onOpen, setOnOpen] = useState(open);
  const [orderNumber, setOrderNumber] = useState("");

  const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    checkDocumentStatus(orderNumber);
  };

  useEffect(() => {
    setOnOpen(open);
    if (onOpen) document.body.style.overflow = "hidden";
    else {
      document.body.style.overflow = "auto";
      setOpen(false);
    }
  }, [onOpen, open]);

  return (
    <div
      className={`fixed bg-white w-full h-screen top-0 left-0 overflow-x-hidden pb-10 transition-all duration-500 ${onOpen ? "opacity-100" : "opacity-0"}`}
    >
      <div className="max-w-[80%] mx-auto">
        <X
          className="cursor-pointer m-4 ml-auto text-gray-700"
          onClick={() => {
            clearStore();
            setOnOpen(false);
          }}
        />
        <div className="max-w-[500px] mx-auto mt-20">
          <h2 className="text-gray-700 font-medium text-lg sm:text-2xl">
            {t("enter_document_id")}
          </h2>
          <form onSubmit={onSubmit} className="relative w-full mt-4">
            <input
              className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
              type="search"
              placeholder={t("enter_document_id")}
              value={orderNumber}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setOrderNumber(e.target.value)
              }
            />
            <button
              type="submit"
              className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-700 bg-gray-100 border border-gray-300 rounded-r-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:cursor-not-allowed"
              disabled={orderNumber.length < 1 || loading}
            >
              <Search />
            </button>
          </form>
          {loading ? (
            <div className="w-full my-6 grid place-items-center min-h-[35vh] border-gray-500">
              <Spinner className="text-gray-700 text-3xl !w-8 !h-8" />
            </div>
          ) : (
            <>
              {orderNumber.length > 0 ? (
                <div className="mt-6 text-gray-700">
                  {documentInfo?.status === null ? (
                    <DocumentNotFound />
                  ) : (
                    documentInfo?.status >= 0 && (
                      <div className="">
                        <DocumentStatusSection documentInfo={documentInfo} />
                        {documentInfo?.ready_documents?.length > 0 && (
                          <DownloadDocument documentInfo={documentInfo} />
                        )}
                        <DocumentMessage
                          documentInfo={documentInfo}
                          className="mt-6"
                        />
                      </div>
                    )
                  )}
                </div>
              ) : (
                ""
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchSidebar;
