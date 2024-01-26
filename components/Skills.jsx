import { Chip } from "./Chip";
import { LogoUI } from "./UI/LogoUI";

export function Skills() {
  return (
    <div className="dark:bg-[#2a303c]">
      <div className="container mx-auto  flex flex-col px-4 py-16 lg:px-20 lg:py-24">
        <div className="flex flex-col items-center justify-center gap-6">
          <Chip label="Skills" />
          <div className="text-center dark:text-[#D1D5DB]">
            <p>The skills, tools and technologies I am really good at:</p>
          </div>
          <div>
            <LogoUI />
          </div>
        </div>
      </div>
    </div>
  );
}
