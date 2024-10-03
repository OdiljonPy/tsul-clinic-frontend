const Copyright = () => {
  return (
    <div className="py-5 border-t border-gray-200">
      <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row ">
        <span className="text-sm text-lime-50">
          ©<a href="https://tsulclinic.uz/"> tsulclinic.uz </a>
          {new Date().getFullYear()}, All rights reserved.
        </span>
        <span className="text-sm text-lime-50 hover:text-white">
          <a href="https://zerodev.uz/" target="_blank">
            Powered by: ZERODEV LLC
          </a>
        </span>
      </div>
    </div>
  );
};

export default Copyright;
