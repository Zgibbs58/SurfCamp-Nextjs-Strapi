import React from "react";
import HighlightArticle from "../components/Blog/HighlightArticle";
import SubscribeToNewsletter from "../components/Blog/SubscribeToNewsletter";
import FeaturedItems from "../components/FeaturedItems/FeaturedItems";
import { fetchBlogArticles, fetchDataFromStrapi } from "@/utils/strapi.utils";

export default async function Blog() {
  const data = await fetchBlogArticles();

  // write different queries: first one to find the highlihgt blog article
  const highlightArticleData = data.find((article) => article.isHighlightArticle);

  // find the articles that are not the highlight one
  const featuredArticlesData = data.filter((article) => !article.isHighlightArticle);
  return (
    <main className="blog-page">
      <HighlightArticle data={highlightArticleData} />
      <SubscribeToNewsletter />
      <FeaturedItems items={featuredArticlesData} />
    </main>
  );
}
