import { Chip } from "./Chip";
// Logo
import { JavascriptLogo } from "./logos/JavascriptLogo";
import { ReactLogo } from "./logos/ReactLogo";
import { TypeScriptLogo } from "./logos/TypeScriptLogo";
import { NodeLogo } from "./logos/NodeLogo";
import { NextLogo } from "./logos/NextLogo";
import { ExpressLogo } from "./logos/ExpressLogo";
import { NestLogo } from "./logos/NestLogo";
import { SocketLogo } from "./logos/SocketLogo";
import { PostgreSQL_Logo } from "./logos/PostgreSQL_Logo";
import { MongoDB_Logo } from "./logos/MongoDB_Logo";
import { SassLogo } from "./logos/SassLogo";
import { TailwindcssLogo } from "./logos/TailwindcssLogo";
import { FigmaLogo } from "./logos/FigmaLogo";
import { CypressLogo } from "./logos/CypressLogo";
import { StorybookLogo } from "./logos/StorybookLogo";
import { GitLogo } from "./logos/GitLogo";

export function Skills() {
  return (
    <div className="flex flex-col py-16 px-4 lg:py-24 lg:px-20">
      <div className="flex flex-col gap-6">
        <Chip label="Skills" />
        <div>
          <p>The skills, tools and technologies I am really good at:</p>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <JavascriptLogo />
          <TypeScriptLogo />
          <ReactLogo />
          <NextLogo />
          <NodeLogo />
          <ExpressLogo />
          <NestLogo />
          <SocketLogo />
          <PostgreSQL_Logo />
          <MongoDB_Logo />
          <SassLogo />
          <TailwindcssLogo />
          <FigmaLogo />
          <CypressLogo />
          <StorybookLogo />
          <GitLogo />
        </div>
      </div>
    </div>
  );
}
