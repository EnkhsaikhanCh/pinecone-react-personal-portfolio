import { MenuIcon } from "./icons/MenuIcon";
import { Mode } from "./icons/Mode";

export function Menu({ items }) {
  return (
    <div className="hidden md:flex items-center gap-5 text-slate-800">
      <a href="{items[0].link}">{items[0].label}</a>
      <a href="{items[1].link}">{items[1].label}</a>
      <a href="{items[2].link}">{items[2].label}</a>
      <a href="{items[3].link}">{items[3].label}</a>
      <Mode />
      <button className="bg-slate-900 text-white rounded-lg px-4 py-2">
        Download CV
      </button>
    </div>
  );
}
