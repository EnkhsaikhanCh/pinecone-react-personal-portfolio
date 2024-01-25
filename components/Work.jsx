import { Chip } from "./Chip";
import { WorkData } from "@/data/WorkData";

export const Work = () => {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center gap-[24px] px-4 py-16 md:gap-[48px]">
      <Chip label={"Work"} />
      {WorkData.map((work, id) => (
        <WorkCard key={id} {...work} />
      ))}
    </div>
  );
};

const WorkCard = (props) => {
  const { image, title, description, labels, label, link } = props;

  return (
    <div>
      <div className="rounded-[12px] shadow-md md:grid md:grid-cols-2">
        {/* image */}
        <div className=" flex items-center justify-center rounded-[12px] bg-[#F9FAFB]">
          <img
            className="h-full w-full rounded-[12px] object-fill p-[32px]"
            src={image}
            alt=""
          />
        </div>
        {/* Content */}
        <div className="flex flex-col gap-[24px] p-[32px] md:flex-1">
          <h1>{title}</h1>
          <p>{description}</p>
          <div className="flex flex-wrap gap-[8px]">
            <Chip label={labels.label} />
          </div>
          <a href={link}>
            <img src="/iconSVG/icon-link.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};
