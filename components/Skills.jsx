import { Chip } from "./Chip";
import { LogoUI } from "./UI/LogoUI";

export function Skills() {
  return (
    <div className="container mx-auto  flex flex-col px-4 py-16 lg:px-20 lg:py-24">
      <div className="flex flex-col items-center justify-center gap-6">
        <Chip label="Skills" />
        <div className="text-center">
          <p>The skills, tools and technologies I am really good at:</p>
        </div>
        <div>
          <LogoUI />
        </div>
      </div>
    </div>
  );
}
