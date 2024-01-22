import { Chip } from "./Chip";
import { LogoData } from "@/data/LogoData";
import { LogoUI } from "./UI/LogoUI";

export function Skills() {
  return (
    <div className="flex flex-col  py-16 px-4 lg:py-24 lg:px-20">
      <div className="flex flex-col justify-center items-center gap-6">
        <Chip label="Skills" />
        <div>
          <p>The skills, tools and technologies I am really good at:</p>
        </div>
        <div>
          <LogoUI />
        </div>
      </div>
    </div>
  );
}
