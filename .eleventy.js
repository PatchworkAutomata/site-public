require('dotenv').config();
const { EleventyRenderPlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");

  eleventyConfig.addPlugin(EleventyRenderPlugin);

  // Collections
  eleventyConfig.addCollection("guides", function(collectionApi) {
    return collectionApi.getFilteredByGlob("*/guides/*.md").sort(function(a, b) {
      return parseInt(a.data.number) - parseInt(b.data.number);
    });
  });
  eleventyConfig.addCollection("tricks", function(collectionApi) {
    return collectionApi.getFilteredByGlob("*/tricks/*.md").sort(function(a, b) {
      return parseInt(a.data.number) - parseInt(b.data.number);
    });
  });
  eleventyConfig.addCollection("tools", function(collectionApi) {
    return collectionApi.getFilteredByGlob("*/tools/*.md").sort(function(a, b) {
      const aTitle = a.data.title.toLowerCase();
      const bTitle = b.data.title.toLowerCase();
      if (aTitle < bTitle) {
        return -1;
      }
      if (aTitle > bTitle) {
        return 1;
      }
      return 0;
    });
  });

  // Filters
  eleventyConfig.addFilter("filterItemsByStatus", function(items, status) {
    return items && items.filter(item => "status" in item.data && item.data["status"] === status);
  });
  eleventyConfig.addFilter("filterItemsByTag", function(items, tag) {
    return items && items.filter(item => item.data.tags && item.data.tags.includes(tag));
  });

  const stripeMode = "TEST"
  eleventyConfig.addGlobalData("stripeEnv", {
    STRIPE_TABLE_ID: process.env[`STRIPE_TABLE_ID_${stripeMode}`],
    STRIPE_TABLE_KEY: process.env[`STRIPE_TABLE_KEY_${stripeMode}`],
    STRIPE_MANAGE_URL: process.env[`STRIPE_MANAGE_URL_${stripeMode}`]
  });

  return {
    dir: {
      input: "src"
    },
    dataTemplateEngine: "liquid",
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "liquid",
  };
};
