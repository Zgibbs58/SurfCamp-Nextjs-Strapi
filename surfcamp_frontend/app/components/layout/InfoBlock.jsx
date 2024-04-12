import React from "react";
import Image from "next/image";

const InfoBlock = ({ data }) => {
  const { headline, text, button, reversed } = data;
  return (
    <div className={`info ${reversed ? "info--reversed" : ""}`}>
      <Image className="info__image" src={"/info-blocks/rectangle.png"} width={600} height={600} alt=""></Image>
      <div className="info__text">
        <h2 className="info__headline">{headline}</h2>
        {text}
        {button}
      </div>
    </div>
  );
};

export default InfoBlock;
