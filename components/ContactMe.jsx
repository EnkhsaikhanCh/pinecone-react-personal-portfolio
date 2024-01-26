import { Chip } from "./Chip";
import { Figma } from "./icons/Figma";
import { GitHub } from "./icons/GitHub";
import { X } from "./icons/X";
import { Copy_icon } from "./icons/Copy_icon";
import { Email_icon } from "./icons/Email_icon";
import { Phone_icon } from "./icons/Phone_icon";

export function ContactMe() {
  return (
    <div className="dark:bg-[#2a303c]">
      <div className="container mx-auto flex flex-col items-center justify-center gap-[24px] px-4 py-16 md:gap-[35px] lg:gap-[48px] lg:px-20 lg:py-24">
        <Chip label={"Get in touch"} />
        <div>
          <p className="text-center dark:text-[#D1D5DB]">
            What’s next? Feel free to reach out to me if you're looking for a
            developer, have a query, or simply want to connect.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-[8px] font-semibold  md:text-2xl lg:text-4xl">
          <p className="flex items-center justify-center gap-[16px] dark:text-white">
            <Email_icon />
            reachsagarshah@gmail.com
            <Copy_icon />
          </p>
          <p className="flex items-center justify-center gap-[16px] dark:text-white">
            <Phone_icon />
            +91 8980500565
            <Copy_icon />
          </p>
        </div>
        <div className="flex flex-col gap-[8px] text-center">
          <p className="dark:text-[#D1D5DB]">
            You may also find me on these platforms!
          </p>
          <div className="flex justify-center">
            <GitHub />
            <Figma />
            <X />
          </div>
        </div>
      </div>
    </div>
  );
}
