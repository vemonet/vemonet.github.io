export default async function(eleventyConfig) {
  eleventyConfig.setOutputDirectory("dist");
  eleventyConfig.addPassthroughCopy("static");
  eleventyConfig.ignores.add("README.md");
};
