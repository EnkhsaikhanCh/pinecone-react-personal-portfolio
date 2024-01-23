import { Chip } from "./Chip";

export function Work() {
  return (
    <div className="flex flex-col justify-center items-center gap-5 py-16 px-4">
      <Chip label={"Work"} />
      <div>
        {/* Box 1 */}
        <div className="shadow-md rounded-[12px] md:grid md:grid-cols-2 lg:w-[896px] lg:h-[480px]">
          {/* image */}
          <div className="p-[32px] bg-[#F9FAFB] rounded-t-[12px] flex justify-center items-center  ">
            <div className="bg-[url('/images/Picture.svg')] min-h-[192px] min-w-[279px]  bg-no-repeat bg-cover"></div>
          </div>
          {/* Content */}
          <div className="flex flex-col gap-[24px] p-[32px] md:flex-1">
            <h1>Fiskil</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia curae.
            </p>
            <div className="flex flex-wrap gap-[8px]">
              <Chip label={"React"} />
              <Chip label={"React"} />
              <Chip label={"React"} />
              <Chip label={"React"} />
              <Chip label={"React"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
