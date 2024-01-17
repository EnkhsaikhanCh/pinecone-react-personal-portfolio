import { Location } from "./icons/Location";
import { Dot } from "./icons/Dot";
import { GitHub } from "@/components/icons/GitHub";
import { X } from "./icons/X";
import { Figma } from "./icons/Figma";

export function Hero() {
  return (
    <div className="flex flex-col py-16 px-4 lg:px-20">
      <div className="flex flex-col sm:flex-row gap-10">
        {/* Image */}
        <div className="sm:order-2 flex justify-center items-center sm:flex-1  ">
          <img
            className="rounded-lg size-96 object-cover"
            src="/images/profile.jpg"
            alt="portrait"
          />
        </div>
        {/* Contents */}
        <div className="flex flex-col gap-10 sm:order-1 sm:flex-1 md:px-0 ">
          <div className="flex flex-col gap-3 text-justify ">
            <h1 className="font-bold text-4xl">Hi, I’m Max 👋</h1>
            <p className="text-slate-600 font-normal md:text-lg">
              I'm a full stack developer (React.js & Node.js) with a focus on
              creating (and occasionally designing) exceptional digital
              experiences that are fast, accessible, visually appealing, and
              responsive. Even though I have been creating web applications for
              over 7 years, I still love it as if it was something new.
            </p>
          </div>
          <div className="flex flex-col gap-2 ">
            <div className="flex gap-2 ">
              <Location />
              <p>Ulaanbaatar, Mongolia</p>
            </div>
            <div className="flex gap-2  ">
              <Dot />
              <p>Available for new projects</p>
            </div>
          </div>
          <div className="flex gap-2">
            <GitHub />
            <X />
            <Figma />
          </div>
        </div>
      </div>
    </div>
  );
}
