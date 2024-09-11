import {
  DocumentStatus,
  DocumentStatusInfo,
  ICheckDocument,
} from "@/types/check-document/check-document";

interface props {
  documentInfo: ICheckDocument;
}

const DocumentStatusSection = ({ documentInfo }: props) => {
  return (
    <div className="flex justify-between items-center">
      <p className="text-gray-700 font-medium text-lg">Document Status</p>
      <p
        className={`font-medium text-base ${documentInfo?.status === DocumentStatus.pending ? "text-orange-200" : documentInfo?.status === DocumentStatus.accepted ? "text-green-500" : documentInfo?.status === DocumentStatus.cancelled ? "text-red-500" : "text-primary-main"}`}
      >
        {DocumentStatusInfo[documentInfo?.status]}
      </p>
    </div>
  );
};

export default DocumentStatusSection;
