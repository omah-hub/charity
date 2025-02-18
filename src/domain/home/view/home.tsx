
import Hero from "../components/hero.comp";
import TopCharity from "../components/top_charity.comp";
import About from "../components/about.comp";
import Latest from "../components/latest.comp";
import Features from "../components/features.comp";
import Questions from "../components/questions.comp";
import News from "../components/news.comp";
import { useEffect, useState } from "react";

export default function Home() {

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger the transition effect after component mounts
    setIsLoaded(true);
  }, []);
  return (
    <div className={`mt-[130px] lg:mt-[200px] transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Hero />
      <TopCharity />
      <About />
      <Latest />
      <Features />
      <Questions />
      <News />
    </div>
  );
}
