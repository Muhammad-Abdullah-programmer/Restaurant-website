// import React from 'react'
// import { CATEGORIES } from './Data'
// import Badge from './Badge'
// const RecipeTable = ({ recipes, category, setCategory, onDelete }) => {
//     return (
//         <>
//             <section className='rounded-xl bg-white shadow-sm ring-1 ring-slate-200'>
//                 <div className='flex flex-wrap items-center gap-3 border-b border-slate-200 p-5'>

//                     {/* all recipes  */}
//                     <h2 className='font-semibold text-slate-600'>All Recipes</h2>

//                     {/* select  */}
//                     <select

//                         value={category}
//                         onChange={(e) => setCategory(e.target.value)}
//                         className='ml-auto roundd-lg border border-slate-300 px-3 py-2 text-sm '>

//                         <option value="All">All</option>

//                         {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
//                     </select>

//                 </div>

//                 {/* table  */}
//                 <div className='overflow-x-auto'>
//                     <table className='w-full min-w-[640px] text-left text-sm'>
//                         <thead className='bg-slate-50 text-slate-500'>

//                             <tr>
//                                 <th className='px-5 py-3 font-medium'>Recipy</th>
//                                 <th className='px-5 py-3 font-medium'>Category</th>
//                                 <th className='px-5 py-3 font-medium'>Time</th>
//                                 <th className='px-5 py-3 font-medium'>Views</th>
//                                 <th className='px-5 py-3 font-medium'>Status</th>
//                                 <th className='px-5 py-3 text-right font-medium'>Action</th>
//                             </tr>

//                         </thead>

//                         <tbody className='divide-y divide-slate-100'>

//                             {recipes.map((r) => (

//                                 <tr key={r.id} className='hover:bg-slate-50'>
//                                     <td className='px-5 py-3'>
//                                         <div className='flex items-center gap-3'>
//                                             <span className='flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-lg'>
//                                                 {r.emoji}
//                                             </span>

//                                             <span className='font-medium'>{r.title}</span>

//                                         </div>


//                                     </td>

//                                     <td className='px-5 py-3 text-slate-600'>
//                                         {r.category}
//                                     </td>

//                                     <td className='px-5 py-3 text-slate-600'>
//                                         {r.time} min
//                                     </td>
//                                     <td className='px-5 py-3 text-slate-600'>{r.views.toLocaleString()}  </td>
//                                     <td className='px-5 py-3 '> Badge Status{r.status}  </td>
//                                     <td className='px-5 py-3 text-right'>  
                                       
//                                        <button className='rounded-md px-2 py-1 text-slate-600 hover:bg-slate-100'>Edit </button>
//                                        <button className='rounded-md px-2 py-1 text-red-600 hover:bg-red-100' onClick={()=> onDelete(r.id)}> Delete </button>
//                                     </td>
//                                 </tr>
//                             ))}

//                         </tbody>

//                     </table>

//                     {recipes.length === 0 && (

//                         <p className='p-8 text-center text-sm text-slate-500'>            No recipes match your search. Try a different name or category.
// </p>
//                     )}

//                 </div>

//             </section>
//         </>
//     )
// }

// export default RecipeTable

import { CATEGORIES } from "./Data";
import Badge from "./Badge";

export default function RecipeTable({ recipes, category, setCategory, onDelete }) {
  return (
    <section className="rounded-xl bg-white shadow-sm ring-1 ring-slate-200">
      <div className="flex flex-wrap items-center gap-3 border-b border-slate-200 p-5">
        <h2 className="font-semibold text-slate-900">All recipes</h2>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="ml-auto rounded-lg border border-slate-300 px-3 py-2 text-sm"
        >
          <option>All</option>
          {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="bg-slate-50 text-slate-500">
            <tr>
              <th className="px-5 py-3 font-medium">Recipe</th>
              <th className="px-5 py-3 font-medium">Category</th>
              <th className="px-5 py-3 font-medium">Time</th>
              <th className="px-5 py-3 font-medium">Views</th>
              <th className="px-5 py-3 font-medium">Status</th>
              <th className="px-5 py-3 text-right font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {recipes.map((r) => (
              <tr key={r.id} className="hover:bg-slate-50">
                <td className="px-5 py-3">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-lg">{r.emoji}</span>
                    <span className="font-medium">{r.title}</span>
                  </div>
                </td>
                <td className="px-5 py-3 text-slate-600">{r.category}</td>
                <td className="px-5 py-3 text-slate-600">{r.time} min</td>
                <td className="px-5 py-3 text-slate-600">{r.views.toLocaleString()}</td>
                <td className="px-5 py-3"><Badge status={r.status} /></td>
                <td className="px-5 py-3 text-right">
                  <button className="rounded-md px-2 py-1 text-slate-600 hover:bg-slate-100">Edit</button>
                  <button onClick={() => onDelete(r.id)} className="rounded-md px-2 py-1 text-red-600 hover:bg-red-50">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {recipes.length === 0 && (
          <p className="p-8 text-center text-sm text-slate-500">
            No recipes match your search. Try a different name or category.
          </p>
        )}
      </div>
    </section>
  );
}
