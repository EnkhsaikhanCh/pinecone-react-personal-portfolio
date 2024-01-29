import { Chip } from "./Chip";

export function About() {
  return (
    <div className="flex flex-col items-center justify-center gap-10 bg-gray-50  px-4 py-16 dark:bg-[#242933] lg:px-20 lg:py-24">
      <Chip label={"About me"} />
      <div className="container mx-auto">
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="flex flex-1 items-center justify-center">
            <img
              className="size-96 rounded-lg object-cover"
              src="/images/photo1.jpg"
              alt="photo1"
            />
          </div>
          <div className="flex flex-1 flex-col gap-5 text-justify">
            <h2 className="text-2xl font-semibold dark:text-white">
              Curious about me? Here you have it:
            </h2>
            <div className="flex flex-col gap-3 text-gray-600 dark:text-[#D1D5DB]">
              <p>
                I'm a passionate, self-proclaimed designer who specializes in
                full stack development (React.js & Node.js). I am very
                enthusiastic about bringing the technical and visual aspects of
                digital products to life. User experience, pixel perfect design,
                and writing clear, readable, highly performant code matters to
                me.
              </p>
              <p>
                I began my journey as a web developer in 2015, and since then,
                I've continued to grow and evolve as a developer, taking on new
                challenges and learning the latest technologies along the way.
                Now, in my early thirties, 7 years after starting my web
                development journey, I'm building cutting-edge web applications
                using modern technologies such as Next.js, TypeScript, NestJS,
                Tailwindcss, and much more.
              </p>
              <p>
                I am very much a progressive thinker and enjoy working on
                products end to end, from ideation all the way to development.
              </p>
              <p>
                When I'm not in full-on developer mode, you can find me hovering
                around on twitter or on indie hacker, witnessing the journey of
                early startups or enjoying some free time. You can follow me on
                Twitter where I share tech-related bites and build in public, or
                you can follow me on GitHub.
              </p>
              <p>Finally, some quick bits about me.</p>
              <div className="gap-4 md:grid md:grid-cols-2">
                <div>
                  <p>- B.E. in Computer Engineering</p>
                  <p>- Full time freelancer</p>
                </div>
                <div>
                  <p>- Avid learner</p>
                  <p>- Aspiring indie hacker</p>
                </div>
              </div>
              <p>
                One last thing, I'm available for freelance work, so feel free
                to reach out and say hello! I promise I don't bite 😉
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
