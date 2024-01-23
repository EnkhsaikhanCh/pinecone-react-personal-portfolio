import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Container } from "@/components/Container";
import { Experience } from "@/components/Experience";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <div>
      <Header />
      <Container>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Work />
      </Container>
    </div>
  );
}
