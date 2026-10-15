import { useState } from "react";
import { CATEGORIES } from "./Data";

export default function AddRecipeModal({ onClose, onSave }) {
  const [form, setForm] = useState({ title: "", category: CATEGORIES[0], time: "", status: "Draft" });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const field =
    "mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200";

  const handleSave = () => {
    if (!form.title.trim()) return;
    onSave({ ...form, time: Number(form.time) || 0 });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
        <h3 className="font-serif text-xl font-semibold">Add recipe</h3>
        <div className="mt-4 space-y-3">
          <label className="block text-sm font-medium text-slate-700">
            Recipe name
            <input className={field} value={form.title} onChange={set("title")} placeholder="e.g. Kheer" />
          </label>
          <div className="grid grid-cols-2 gap-3">
            <label className="block text-sm font-medium text-slate-700">
              Category
              <select className={field} value={form.category} onChange={set("category")}>
                {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
              </select>
            </label>
            <label className="block text-sm font-medium text-slate-700">
              Time (minutes)
              <input type="number" min="0" className={field} value={form.time} onChange={set("time")} />
            </label>
          </div>
          <label className="block text-sm font-medium text-slate-700">
            Status
            <select className={field} value={form.status} onChange={set("status")}>
              <option>Draft</option>
              <option>Published</option>
            </select>
          </label>
        </div>
        <div className="mt-6 flex justify-end gap-2">
          <button onClick={onClose} className="rounded-lg px-4 py-2 text-sm text-slate-600 hover:bg-slate-100">
            Cancel
          </button>
          <button onClick={handleSave} className="rounded-lg bg-amber-500 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-amber-400">
            Save recipe
          </button>
        </div>
      </div>
    </div>
  );
}