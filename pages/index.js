import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Container } from "@/components/Container";
import { Experience } from "@/components/Experience";
import { Work } from "@/components/Work";
import { ContactMe } from "@/components/ContactMe";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      {/* <Container> */}
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Work />
      <ContactMe />
      {/* </Container> */}
      <Footer />
    </div>
  );
}
