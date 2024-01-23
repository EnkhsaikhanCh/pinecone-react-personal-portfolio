// LogoData -> LogoUI -> Skills
import { LogoData } from "@/data/LogoData";
export function LogoUI() {
  const listItems = LogoData.map((logo) => (
    <li key={logo.id} className="w-20">
      <div className="flex flex-col justify-center items-center gap-2">
        <img className="h-16 w-16" src={logo.image} alt={logo.name} />
        <p className="text-gray-600">{logo.name}</p>
      </div>
    </li>
  ));

  return (
    <article className="flex justify-center">
      <ul className="flex flex-wrap items-center gap-5 justify-center ">
        {listItems}
      </ul>
    </article>
  );
}
