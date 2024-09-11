import { FolderDown } from "lucide-react";
import { ICheckDocument } from "@/types/check-document/check-document";
import {getTranslation} from "@/i18n";

interface props {
  documentInfo: ICheckDocument;
}

const DownloadDocument = ({ documentInfo }: props) => {
    const {t} = getTranslation()
  return (
    <div className="mt-4">
      <h2 className="text-gray-700 font-medium text-lg">
          {t('download_document')}
      </h2>
      <div className="mt-2 flex flex-col gap-4">
        {documentInfo?.ready_documents?.map((document) => (
          <a
            href={document?.document}
            target="_blank"
            className="flex items-center justify-between shadow p-3 bg-gray-100  group"
          >
            <span className="text-gray-700 font-medium  transition duration-300 group-hover:text-primary-main">
              {document?.document_name}
            </span>
            <span>
              <FolderDown
                size={24}
                className="text-gray-700 cursor-pointer transition duration-300 group-hover:text-primary-main"
              />
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default DownloadDocument;
