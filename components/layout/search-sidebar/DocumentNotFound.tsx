import { Files } from "lucide-react";

const DocumentNotFound = () => {
  return (
    <div className="no-file-found flex flex-col items-center justify-center py-8 px-4 text-center bg-gray-100  rounded-lg shadow-md">
      <Files size={50} className="text-gray-700 " />
      <h3 className="text-xl font-medium mt-4 text-gray-700 dark:text-gray-200">
        Hujjat topilmadi
      </h3>
      <p className="text-gray-500 dark:text-gray-400 mt-2">
        Ayni vaqtda bunday ID lik hujjat mavjud emas
      </p>
    </div>
  );
};

export default DocumentNotFound;
