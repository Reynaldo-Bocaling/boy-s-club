import React from "react";
import Hero from "./view/Hero";
import About from "./view/About";
import Header from "./components/Header";
import Tokenomics from "./view/Tokenomics";
import Contact from "./view/Contact";
import FAQ from "./view/FAQ";

const App = () => {
  return (
    <main className="relative w-full overflow-hidden">
      <Header />
      <Hero />
      <About />
      <Tokenomics />
      <FAQ />
      <Contact />
    </main>
  );
};

export default App;
