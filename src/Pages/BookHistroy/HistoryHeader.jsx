import { BiChevronDown, BiSearch, BiTrash } from "react-icons/bi";

const HistoryHeader = ({
  search,
  setSearch,
  handleClear,
  sortType,
  setSortType,
}) => {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          Viewed Books History
        </h1>
        <p className="text-slate-500 mt-1">
          Track all the books you've recently explored
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <div className="relative">
          <BiSearch
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Search viewed books..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 w-64"
          />
        </div>
        {/* sort dropdown */}
        <select
          value={sortType}
          onChange={(e) => setSortType(e.target.value)}
          className="px-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
        >
          <option value="recent">Recently Viewed</option>
          <option value="old">Old First</option>
        </select>
        <button
          onClick={handleClear}
          className="flex  items-center gap-2 cursor-pointer active:scale-95 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
        >
          <BiTrash size={16} /> Clear History
        </button>
      </div>
    </div>
  );
};

export default HistoryHeader;
