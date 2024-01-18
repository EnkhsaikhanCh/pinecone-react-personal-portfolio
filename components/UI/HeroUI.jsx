// HeroUI -> Hero
export function HeroUI({ heros }) {
  return (
    <div>
      {heros.map((name) => (
        <h1 className="font-bold text-4xl">Hi, I’m {name.name}👋</h1>
      ))}
      {heros.map((description) => (
        <p className="text-slate-600 font-normal md:text-lg">
          {description.description}
        </p>
      ))}
    </div>
  );
}
