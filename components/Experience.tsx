import { ExperienceData } from "../data/ExperienceData";
import { Chip } from "./Chip";

interface ExperienceItem {
  id: number;
  logo: string;
  name: string;
  position: string;
  when: string;
  note: string;
}

export const Experience = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 bg-gray-50 px-4 py-16 dark:bg-[#242933]">
      <Chip label={"Experience"} />
      <div className="flex flex-col gap-5 text-center dark:text-[#D1D5DB]">
        <p>Here is a quick summary of my most recent experiences:</p>
      </div>
      {ExperienceData.map((card) => (
        <ExperienceCard key={card.id} {...card} />
      ))}
    </div>
  );
};

const ExperienceCard = (props: ExperienceItem) => {
  const { id, logo, name, position, when, note } = props;

  return (
    <div className="flex flex-col gap-4 rounded-xl bg-white p-8 shadow-lg shadow-slate-200 dark:bg-[#2a303c] dark:shadow-[0_25px_25px_0_rgba(0,0,0,0.15)] md:grid md:grid-cols-4 md:gap-[20px] lg:w-[896px]">
      <img
        className="order-1 h-[28px] w-[102px]"
        src={logo}
        alt={`${name} logo`}
      />
      <p className="order-2 flex text-[#374151] dark:text-[#E5E7EB] md:order-3 md:justify-end">
        {when}
      </p>
      <div className="order-2 col-span-2 flex flex-col gap-4">
        <h4 className="text-2xl font-semibold dark:text-white">{position}</h4>
        <p className="text-[#4B5563] dark:text-[#D1D5DB]">{note}</p>
      </div>
    </div>
  );
};
