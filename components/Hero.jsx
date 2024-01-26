// Icon
import { Location } from "./icons/Location_icon";
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
    <div className="dark:bg-[#2a303c]">
      <div className="container mx-auto flex flex-col px-4 py-16 lg:px-20 lg:py-24">
        <div className="flex flex-col gap-10 sm:flex-row">
          {/* Image */}
          <div className="flex items-center justify-center sm:order-2 sm:flex-1  ">
            <img
              className="size-96 rounded-lg object-cover"
              src="/images/profile.jpg"
              alt="portrait"
            />
          </div>
          {/* Contents */}
          <div className="flex flex-col gap-10 sm:order-1 sm:flex-1 md:px-0 ">
            <div className="flex flex-col gap-3 text-justify ">
              <HeroUI heros={HeroData} />
            </div>
            <div className="flex flex-col gap-2 dark:text-[#b2cdd6]">
              <div className="flex gap-2 ">
                <Location />
                <p>Ulaanbaatar, Mongolia</p>
              </div>
              <div className="flex gap-2  ">
                <Dot />
                <p>Available for new projects</p>
              </div>
            </div>
            <div className="flex gap-2 ">
              <GitHub />
              <X />
              <Figma />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
