import { Chip } from "./Chip";
import { WorkData } from "@/data/WorkData";
import { LinkIcon } from "./icons/Link_icon";

export const Work = () => {
  return (
    <div className="dark:bg-[#2a303c]">
      <div className="container mx-auto flex flex-col items-center justify-center gap-[24px] px-4 py-16 md:gap-[48px]">
        <Chip label={"Work"} />
        {WorkData.map((work, id) => (
          <WorkCard key={id} {...work} />
        ))}
      </div>
    </div>
  );
};

const WorkCard = (props) => {
  const { image, title, description, labels, label, link } = props;

  return (
    <div className="rounded-[12px]">
      <div className="rounded-[12px] shadow-md md:grid md:grid-cols-2">
        {/* image */}
        <div className=" flex items-center justify-center rounded-[12px] bg-[#F9FAFB] dark:bg-[#323947]">
          <img
            className="h-full w-full rounded-[12px] object-fill p-[32px]"
            src={image}
            alt=""
          />
        </div>
        {/* Content */}
        <div className="flex flex-col gap-[24px] rounded-[12px] p-[32px] md:flex-1 dark:bg-[#242934]">
          <h1 className="dark:text-[#F9FAFB]">{title}</h1>
          <p className="dark:text-[#D1D5DB]">{description}</p>
          <div className="flex flex-wrap gap-[8px]">
            <Chip label={labels.label} />
          </div>
          <a href={link}>
            <LinkIcon />
          </a>
        </div>
      </div>
    </div>
  );
};
