import CareTicker from "@/components/CareTicker";
import Features from "@/components/Features";
import GoalsScroller from "@/components/GoalsScroller";
import Hero from "@/components/Hero";
import SiteHeader from "@/components/SiteHeader";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <GoalsScroller />
        <CareTicker />
        <Features />
      </main>
    </>
  );
}
