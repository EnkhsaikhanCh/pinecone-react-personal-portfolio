// HeroUI -> Hero
export function HeroUI({ heros }) {
  return (
    <div>
      {heros.map((hero) => (
        <div key={hero.id} className="flex flex-col gap-3">
          <h1 className="font-bold text-4xl">Hi, I’m {hero.name}👋</h1>
          <p className="text-slate-600 font-normal md:text-lg">
            {hero.description}
          </p>
        </div>
      ))}
    </div>
  );
}
