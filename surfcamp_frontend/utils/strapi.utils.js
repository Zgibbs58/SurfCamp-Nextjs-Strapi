import Link from "next/link";

const BASE_URL = process.env.STRAPI_URL || "http://localhost:1337";

export async function fetchDataFromStrapi(route) {
  const url = `${BASE_URL}/api/${route}`;
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.error(error);
    throw new Error(`Error fetching data from ${url}`);
  }
}

// extract the info blocks from the Strapi response for each info block
export function processInfoBlocks(data) {
  const infoBlocksRaw = data.data.attributes.info_blocks.data;

  return infoBlocksRaw.map((infoBlock) => ({
    ...infoBlock.attributes,
    imageSrc: BASE_URL + infoBlock.attributes?.image?.data?.attributes?.url,
    id: infoBlock.id,
    button: createInfoBlockBtn(infoBlock.attributes.button),
  }));
}

function createInfoBlockBtn(buttonData) {
  if (!buttonData) return null;
  return (
    <Link href={`/${buttonData.slug}`} className={`btn btn--medium btn--${buttonData.color}`}>
      {buttonData.text}
    </Link>
  );
}
