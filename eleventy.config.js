export default async function(eleventyConfig) {
  // Configure Eleventy
  const assets = "./_src/assets/";
  eleventyConfig.addPassthroughCopy(assets);
  eleventyConfig.addWatchTarget(assets);

};

export const config = {
  dir: {
    includes: "_includes",
    input: "_src",
    output: "_site"
  }
};
