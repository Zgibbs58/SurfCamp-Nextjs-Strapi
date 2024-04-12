import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = ({ imgSrc, headline, theme = "orange" }) => {
  return (
    <section className="hero">
      <div className="hero__background">
        <Image src={imgSrc || "/assets/hero-home.png"} alt="hero" width={1200} height={1000}></Image>
        {/* <img src={imgSrc || "/assets/hero-home.png"} alt="hero"></img> */}
      </div>
      <div className={`hero__headline hero__headline--${theme}`}>{headline}</div>
      <button className={`btn btn--medium btn--turquoise btn--${theme}`}>
        <Link href={"/events"}>BOOK NOW</Link>
      </button>
      <Image className={`hero__logo hero__logo--${theme}`} src="/assets/logo.svg" width={100} height={100} alt="logo"></Image>
    </section>
  );
};

export default HeroSection;
