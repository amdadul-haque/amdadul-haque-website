import { 
  Header, 
  Hero, 
  About, 
  Services, 
  SkillsScroll, 
  Experience, 
  Projects, 
  Testimonials, 
  Blog, 
  Contact, 
  Footer 
} from "@/components";

export default function Home() {
  return (
    <>
      <Header />
      <main className="">
        <Hero />
        <SkillsScroll />
        <About />
        <Services />
        <Experience />
        <Projects />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
