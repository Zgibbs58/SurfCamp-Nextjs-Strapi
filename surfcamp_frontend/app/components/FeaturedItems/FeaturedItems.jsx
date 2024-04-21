"use client";

import React from "react";
import FeaturedArticle from "./FeaturedArticle";

const FeaturedItems = ({ headline, items }) => {
  const [itemNumber, setItemNumber] = React.useState(3);

  const onShowMore = () => {
    if (itemNumber + 3 > items.length) {
      return setItemNumber(items.length);
    } else {
      return setItemNumber(itemNumber + 3);
    }
  };

  return (
    <section className="featured-items">
      <h3 className="featured-items__headline">{headline || "Our featured articles"}</h3>
      <div className="featured-items__container">
        {items.slice(0, itemNumber).map((item) => (
          <FeaturedArticle key={item.slug} article={item} />
        ))}
      </div>
      {itemNumber < items.length && (
        <button onClick={onShowMore} className="btn btn--medium btn--turquoise">
          See more
        </button>
      )}
    </section>
  );
};

export default FeaturedItems;
