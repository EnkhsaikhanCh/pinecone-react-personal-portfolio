import { Chip } from "./Chip";
import { WorkData } from "@/data/WorkData";

export const Work = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 py-16 px-4">
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
      <div className="shadow-md rounded-[12px] md:grid md:grid-cols-2">
        {/* image */}
        <div className=" bg-[#F9FAFB] rounded-[12px] flex justify-center items-center">
          <img
            className="object-fill h-full w-full rounded-[12px] p-[32px]"
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
            <img src="/images/icon.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};
