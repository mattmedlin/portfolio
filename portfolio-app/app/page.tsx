import Introduction from "@/components/Introduction";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-[#051622] no-scrollbar">
      <Nav />
      <Introduction />
      <Projects />
      <About />
      <Footer />
    </div>
  );
}
