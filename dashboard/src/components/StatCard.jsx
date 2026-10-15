

export default function StatCard({ label, value, note }) {
  return (
    <div className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
      <p className="text-sm text-slate-500">{label}</p>
      <p className="mt-1 font-serif text-3xl font-semibold text-slate-900">{value}</p>
      <p className="mt-1 text-xs text-emerald-600">{note}</p>
    </div>
  );
}
