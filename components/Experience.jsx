import { Chip } from "./Chip";
import { ExperienceData } from "@/data/ExperienceData";

export function Experience() {
  const experienceItems = ExperienceData.map((experience) => (
    <div
      key={experience.id}
      className="flex flex-col gap-4 p-8 rounded-xl bg-[#F9FAFB] shadow-lg shadow-slate-200 lg:w-[896px] md:grid md:grid-cols-4 md:gap-[20px] "
    >
      <img
        className="h-[28px] w-[102px] order-1 "
        src={experience.logo}
        alt={experience.name}
      />
      <p className="order-2 md:order-3 flex md:justify-end text-[#374151]">
        {experience.when}
      </p>

      <div className="order-2 flex flex-col gap-4 col-span-2">
        <h4 className="text-2xl font-semibold">{experience.level}</h4>
        <p className="text-[#4B5563] ">{experience.note}</p>
      </div>
    </div>
  ));

  return (
    <div className="flex flex-col justify-center items-center gap-5 py-16 px-4">
      <Chip label={"Experience"} />
      <div className="flex flex-col gap-5">
        <p>Here is a quick summary of my most recent experiences:</p>
      </div>
      <div className="flex flex-col gap-5">{experienceItems}</div>
    </div>
  );
}
