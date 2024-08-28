import { Search, X } from "lucide-react";

interface props {
  open: boolean;
  setOpen: (e: boolean) => void;
}

const SearchSidebar = ({ open, setOpen }: props) => {
  return (
    <div className={`fixed bg-white w-full h-screen top-0 left-0 overflow-hidden transition-all duration-500 ${open ? "opacity-100" : "opacity-0"}`}>
      <div className="max-w-[80%] mx-auto">
        <X
          className="cursor-pointer m-4 ml-auto text-gray-700"
          onClick={() => setOpen(false)}
        />

        <div className="relative max-w-sm mx-auto mt-20">
          <input
            className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
            type="search"
            placeholder="Search"
          />
          <button className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-700 bg-gray-100 border border-gray-300 rounded-r-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            <Search />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchSidebar;
