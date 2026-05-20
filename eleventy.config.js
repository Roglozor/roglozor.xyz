export default async function(eleventyConfig) {
  // Configure Eleventy
  const assets = "./_src/assets/";
  eleventyConfig.addPassthroughCopy(assets);
  eleventyConfig.addWatchTarget(assets);
  const pgp = "./_src/pgp.txt";
  eleventyConfig.addPassthroughCopy(pgp);
  eleventyConfig.addWatchTarget(pgp);
  const rss = "./_src/rss.xml";
  eleventyConfig.addPassthroughCopy(rss);
  eleventyConfig.addWatchTarget(rss);
};

export const config = {
  dir: {
    includes: "_includes",
    input: "_src",
    output: "_site"
  }
};
