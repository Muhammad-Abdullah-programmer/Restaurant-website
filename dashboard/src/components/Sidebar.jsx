import { NAV } from "./Data";
import {Link} from"react-router-dom"

export default function Sidebar({ active, setActive, open, onClose }) {
  return (
    <>
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-60 transform bg-[#2B1B2E] p-5 text-purple-100 transition-transform md:static md:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-8 flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500 text-lg">🍲</span>
          <span className="font-serif text-lg font-semibold text-white">Recipe Admin</span>
        </div>
        <nav className="space-y-1">
          {NAV.map((item) => (
            <Link   to={item.path || "/"}
>            <button
              key={item.label}
              onClick={() => { setActive(item.label); onClose(); }}
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                active === item.label ? "bg-amber-500 font-semibold text-slate-900" : "hover:bg-white/10"
              }`}>
            
              <span>{item.icon}</span>
              <span>{item.label}</span>
              
              </button>
            </Link>
          ))}
        </nav>
      </aside>
      {open && <div className="fixed inset-0 z-30 bg-black/40 md:hidden" onClick={onClose} />}
    </>
  );
}