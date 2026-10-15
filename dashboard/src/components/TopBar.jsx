

export default function Topbar({ query, setQuery, onAdd, onMenu }) {
  return (
    <header className="flex items-center gap-3 border-b border-slate-200 bg-white px-4 py-3 md:px-8">
      <button className="rounded-lg p-2 text-xl hover:bg-slate-100 md:hidden" onClick={onMenu} aria-label="Open menu">
        ☰
      </button>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search recipes"
        className="w-full max-w-sm rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
      />
      <button
        onClick={onAdd}
        className="ml-auto whitespace-nowrap rounded-lg bg-amber-500 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-amber-400"
      >
        Add recipe
      </button>
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2B1B2E] text-sm font-semibold text-white">A</div>
    </header>
  );
}
