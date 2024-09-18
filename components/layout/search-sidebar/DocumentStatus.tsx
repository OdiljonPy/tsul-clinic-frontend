import {
  DocumentStatus,
  DocumentStatusInfo,
  ICheckDocument,
} from "@/types/check-document/check-document";
import { getTranslation } from "@/i18n";

interface props {
  documentInfo: ICheckDocument;
}

const DocumentStatusSection = ({ documentInfo }: props) => {
  const { t } = getTranslation();
  return (
    <div className="flex justify-between items-center">
      <p className="text-gray-700 font-medium text-lg">
        {t("document_status")}
      </p>
      <p
        className={`font-medium text-base ${documentInfo?.status === DocumentStatus.pending ? "text-orange-200" : documentInfo?.status === DocumentStatus.payed ? "text-green-500" : documentInfo?.status === DocumentStatus.cancelled ? "text-red-500" : documentInfo?.status === DocumentStatus.prepared ? "text-yellow-300" : "text-primary-main"}`}
      >
        {t(DocumentStatusInfo[documentInfo?.status])}
      </p>
    </div>
  );
};

export default DocumentStatusSection;
