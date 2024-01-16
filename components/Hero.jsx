import { Location } from "./icons/Location";
import { Dot } from "./icons/Dot";

export function Hero() {
  return (
    <div className="md:px-10 lg:px-20">
      <div className="flex flex-col md:flex-row gap-10 py-16 justify-center items-center">
        <div className="md:order-2 flex justify-center items-center md:flex-1">
          <img
            className="rounded-lg h-full w-60 object-cover"
            src="/images/portrait.jpg"
            alt="portrait"
          />
        </div>
        <div className="flex flex-col gap-12 md:order-1 md:flex-1 lg:pl-auto">
          <div className="flex flex-col gap-3">
            <h1 className="sm:font-semibold md:font-bold">Hi, I’m Max 👋</h1>
            <p className="text-slate-600 font-normal">
              I'm a full stack developer (React.js & Node.js) with a focus on
              creating (and occasionally designing) exceptional digital
              experiences that are fast, accessible, visually appealing, and
              responsive. Even though I have been creating web applications for
              over 7 years, I still love it as if it was something new.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <Location />
              <p>Ahmedabad, India</p>
            </div>
            <div className="flex gap-2">
              <Dot />
              <p>Available for new projects</p>
            </div>
          </div>
          <div>Actions</div>
        </div>
      </div>
    </div>
  );
}
