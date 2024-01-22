import { LogoData } from "@/data/LogoData";
export function LogoUI() {
  const listItems = LogoData.map((logo) => (
    <li>
      <div
        key={logo.id}
        className="flex flex-col justify-center items-center gap-2"
      >
        <img className="h-16 w-16" src={logo.image} alt={logo.name} />
        <p className="text-gray-600">{logo.name}</p>
      </div>
    </li>
  ));

  return (
    <article>
      <ul className="flex flex-wrap gap-10 justify-center items-center">
        {listItems}
      </ul>
    </article>
  );
}
