// import { WEEK } from "./Data";

// export default function WeeklyChart() {
//   const max = Math.max(...WEEK.map((w) => w.views));
//   return (
//     <div className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-200 lg:col-span-2">
//       <h2 className="font-semibold text-slate-900">Views this week</h2>
//       <div className="mt-4 flex h-44 items-end gap-3">
//         {WEEK.map((w) => (
//           <div key={w.day} className="flex flex-1 flex-col items-center gap-2">
//             <div
//               className="w-full rounded-t-md bg-amber-400"
//               style={{ height: `${(w.views / max) * 100}%` }}
//               title={`${w.views} views`}
//             />
//             <span className="text-xs text-slate-500">{w.day}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import { WEEK } from "./Data";

export default function WeeklyChart() {
  const max = Math.max(...WEEK.map((w) => w.views));
  return (
    <div className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-200 lg:col-span-2">
      <h2 className="font-semibold text-slate-900">Views this week</h2>
      <div className="mt-4 flex h-44 items-end gap-3">
        {WEEK.map((w) => (
          <div key={w.day} className="flex flex-1 flex-col items-center gap-2">
            <div
              className="w-full rounded-t-md bg-amber-400"
              style={{ height: `${(w.views / max) * 100}%` }}
              title={`${w.views} views`}
            />
            <span className="text-xs text-slate-500">{w.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
}