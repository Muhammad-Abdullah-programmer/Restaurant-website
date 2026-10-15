export default function Badge({ status }) {
  const styles =
    status === "Published" ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700";
  return <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${styles}`}>{status}</span>;
}