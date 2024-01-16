import { Logo } from "./icons/Logo";
import { Menu } from "./icons/Menu";
import { Mode } from "./icons/Mode";

export function Navbar() {
  return (
    <div className="md:px-10 lg:px-20">
      <div className="flex py-2 justify-between items-center ">
        <Logo />
        <div className="sm:flex md:hidden">
          <Menu />
        </div>
        <div className="hidden md:flex items-center gap-5 text-slate-800">
          <a href="">About</a>
          <a href="">Work</a>
          <a href="">Testimonials</a>
          <a href="">Contact</a>
          <Mode />
          <button className="bg-slate-900 text-white rounded-lg px-4 py-2">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
}
