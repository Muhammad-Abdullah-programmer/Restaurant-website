// import React from 'react'

// const TopRecipes = ({recipes}) => {

//   const top = [...recipes].sort((a, b) => b.views - a.views).slice(0, 4);
//   return (
//    <>
//    <div className='rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-200'>
//     <h2 className='font-semibold text-slate-900'>Most Viewed</h2>

//     <ul className='mt-4 space-y-3'>
//         {top.map((r)=>(

//             <li key={r.id} className='flex items-center gap-3 '>

//                 <span className='flex h-10 w-10 items-center justify-center rounded-lg bg-state-100 text-xl '>
                 
//                {r.emoji}

//                 </span>

//                 <div className='min-w-0 flex-1'>

//                     <p className=' truncate text-sm font-medium '>{r.title}</p>
//                     <p className=' text-slate-500 text-xs  '>{r.views.toLocaleString()}Views</p>

//                 </div>
//             </li>
//         ))}

//     </ul>

//    </div>
//    </>
//   )
// }

// export default TopRecipes

export default function TopRecipes({ recipes }) {
  const top = [...recipes].sort((a, b) => b.views - a.views).slice(0, 4);
  return (
    <div className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
      <h2 className="font-semibold text-slate-900">Most viewed</h2>
      <ul className="mt-4 space-y-3">
        {top.map((r) => (
          <li key={r.id} className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-xl">{r.emoji}</span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium">{r.title}</p>
              <p className="text-xs text-slate-500">{r.views.toLocaleString()} views</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}