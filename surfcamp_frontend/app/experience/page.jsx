import HeroSection from "../components/HeroSection";
import InfoBlock from "../components/layout/InfoBlock";
import { fetchDataFromStrapi, processInfoBlocks } from "@/utils/strapi.utils";

export default async function Experience() {
  const data = await fetchDataFromStrapi("infoblocks-experience?populate=deep");
  const infoBlockData = processInfoBlocks(data);
  const heroHeadLine = (
    <>
      <h1>barrel.</h1>
      <h1>your.</h1>
      <h1>happiness.</h1>
    </>
  );

  return (
    <main>
      <HeroSection imgSrc={"/assets/hero-experience.png"} headline={heroHeadLine} theme="orange" />
      {infoBlockData.map((data) => (
        <InfoBlock key={data.id} data={data} />
      ))}
    </main>
  );
}

export const revalidate = 300;
