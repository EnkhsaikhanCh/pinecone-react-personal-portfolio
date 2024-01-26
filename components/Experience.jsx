import { Chip } from "./Chip";
import { ExperienceData } from "@/data/ExperienceData";

export const Experience = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 bg-gray-50 px-4 py-16 dark:bg-[#242933]">
      <Chip label={"Experience"} />
      <div className="flex flex-col gap-5 text-center dark:text-[#D1D5DB]">
        <p>Here is a quick summary of my most recent experiences:</p>
      </div>
      {ExperienceData.map((card, id) => (
        <ExperienceCard key={id} {...card} />
      ))}
    </div>
  );
};

const ExperienceCard = (props) => {
  const { id, logo, name, position, when, note } = props;

  return (
    <div
      key={id}
      className="flex flex-col gap-4 rounded-xl bg-white p-8 shadow-lg shadow-slate-200 md:grid md:grid-cols-4 md:gap-[20px] lg:w-[896px] dark:bg-[#2a303c] dark:shadow-[0_25px_25px_0_rgba(0,0,0,0.15)]"
    >
      <img className="order-1 h-[28px] w-[102px] " src={logo} alt={name} />
      <p className="order-2 flex text-[#374151] md:order-3 md:justify-end dark:text-[#E5E7EB]">
        {when}
      </p>
      <div className="order-2 col-span-2 flex flex-col gap-4">
        <h4 className="text-2xl font-semibold dark:text-white">{position}</h4>
        <p className="text-[#4B5563] dark:text-[#D1D5DB]">{note}</p>
      </div>
    </div>
  );
};
