import React from "react";
import { fetchBlogArticles, fetchDataFromStrapi } from "@/utils/strapi.utils";

export default async function Page({ params }) {
  const { article: slug } = params;

  const articles = await fetchBlogArticles();

  const article = articles.find((article) => article.slug === slug);

  return (
    <main>
      <h1>{article.headline}</h1>
      <p>{article.content}</p>
    </main>
  );
}

// gereateStaticParams function that Next.js uses to determine which dynamic routes should be generated at build time
export async function generateStaticParams() {
  const articles = await fetchDataFromStrapi("blog-articles");
  return articles.data.map((article) => ({
    article: article.attributes.slug,
  }));
}
