import { Chip } from "./Chip";
import { Figma } from "./icons/Figma";
import { GitHub } from "./icons/GitHub";
import { X } from "./icons/X";

export function ContactMe() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center gap-[24px] px-4 py-16 md:gap-[35px] lg:gap-[48px] lg:px-20 lg:py-24">
      <Chip label={"Get in touch"} />
      <div>
        <p className="text-center">
          What’s next? Feel free to reach out to me if you're looking for a
          developer, have a query, or simply want to connect.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-[8px] font-semibold  md:text-2xl lg:text-4xl">
        <p className="flex items-center justify-center">
          <img
            className="p-[6px] lg:h-[38px] lg:w-[38px]"
            src="/iconSVG/icon-email.svg"
            alt=""
          />
          reachsagarshah@gmail.com
          <img
            className="p-[6px] lg:h-[38px] lg:w-[38px]"
            src="/iconSVG/icon-copy.svg"
            alt=""
          />
        </p>
        <p className="flex items-center justify-center gap-[16px]">
          <img
            className="p-[6px] lg:h-[38px] lg:w-[38px]"
            src="/iconSVG/icon-phone.svg"
            alt=""
          />
          +91 8980500565
          <img
            className="p-[6px] lg:h-[38px] lg:w-[38px]"
            src="/iconSVG/icon-copy.svg"
            alt=""
          />
        </p>
      </div>
      <div className="flex flex-col gap-[8px] text-center">
        <p>You may also find me on these platforms!</p>
        <div className="flex justify-center">
          <GitHub />
          <Figma />
          <X />
        </div>
      </div>
    </div>
  );
}
