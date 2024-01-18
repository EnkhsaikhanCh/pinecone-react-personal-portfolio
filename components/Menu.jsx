import { Mode } from "./icons/Mode";

export function Menu({ items }) {
  return (
    <div className="hidden md:flex items-center gap-5 text-slate-800 ">
      {items.map((item) => (
        <a key={item.id} href="{item.link}">
          {item.label}
        </a>
      ))}
      <Mode />
      <button className="bg-slate-900 text-white rounded-lg px-4 py-2 hover:bg-sky-500">
        Download CV
      </button>
    </div>
  );
}
