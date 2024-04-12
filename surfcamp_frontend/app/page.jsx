import HeroSection from ".//components/HeroSection";

export default function Home() {
  const heroHeadLine = (
    <>
      <h1>barrel.</h1>
      <h1>your.</h1>
      <h1>happiness.</h1>
    </>
  );
  return (
    <main>
      <HeroSection headline={heroHeadLine} />
    </main>
  );
}
