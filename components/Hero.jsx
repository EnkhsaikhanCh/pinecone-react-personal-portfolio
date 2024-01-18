// Icon
import { Location } from "./icons/Location";
import { Dot } from "./icons/Dot";
import { GitHub } from "@/components/icons/GitHub";
import { X } from "./icons/X";
import { Figma } from "./icons/Figma";
// UI
import { HeroUI } from "./UI/HeroUI";
// Data
import { HeroData } from "@/data/HeroData";

export function Hero() {
  return (
    <div className="flex flex-col py-16 px-4 lg:py-24 lg:px-20">
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
            <HeroUI heros={HeroData} />
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
