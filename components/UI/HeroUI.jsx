// HeroUI -> Hero
export function HeroUI({ heros }) {
  return (
    <div>
      {heros.map((hero) => (
        <div key={hero.id} className="flex flex-col gap-3">
          <h1 className="text-4xl font-bold">Hi, I’m {hero.name}👋</h1>
          <p className="font-normal text-slate-600 md:text-lg">
            {hero.description}
          </p>
        </div>
      ))}
    </div>
  );
}
