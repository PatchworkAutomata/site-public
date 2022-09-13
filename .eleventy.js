const { EleventyRenderPlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");

  eleventyConfig.addPlugin(EleventyRenderPlugin);

  // Collections
  eleventyConfig.addCollection("guides", function(collectionApi) {
    return collectionApi.getFilteredByGlob("*/guides/*.md");
  });
  eleventyConfig.addCollection("tricks", function(collectionApi) {
    return collectionApi.getFilteredByGlob("*/tricks/*.md");
  });
  eleventyConfig.addCollection("tools", function(collectionApi) {
    return collectionApi.getFilteredByGlob("*/tools/*.md");
  });

  // Filters
  eleventyConfig.addFilter("filterItemsByStatus", function(items, status) {
    return items && items.filter(item => "status" in item.data && item.data["status"] === status);
  });
  eleventyConfig.addFilter("filterItemsByTag", function(items, tag) {
    return items && items.filter(item => item.data.tags && item.data.tags.includes(tag));
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
