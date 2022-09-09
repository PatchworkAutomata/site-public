const { EleventyRenderPlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");

  eleventyConfig.addPlugin(EleventyRenderPlugin);

  // Collections
  const statusKey = "status";
  const statusPublished = "published";
  const statusDraft = "draft";
  eleventyConfig.addCollection("publishedGuides", function(collectionApi) {
    return collectionApi.getFilteredByGlob("*/guides/*.md").filter(function(item) {
      return statusKey in item.data && item.data[statusKey] === statusPublished;
    });
  });
  eleventyConfig.addCollection("draftGuides", function(collectionApi) {
    return collectionApi.getFilteredByGlob("*/guides/*.md").filter(function(item) {
      return statusKey in item.data && item.data[statusKey] === statusDraft;
    });
  });
  eleventyConfig.addCollection("publishedTricks", function(collectionApi) {
    return collectionApi.getFilteredByGlob("*/tricks/*.md").filter(function(item) {
      return statusKey in item.data && item.data[statusKey] === statusPublished;
    });
  });
  eleventyConfig.addCollection("draftTricks", function(collectionApi) {
    return collectionApi.getFilteredByGlob("*/tricks/*.md").filter(function(item) {
      return statusKey in item.data && item.data[statusKey] === statusDraft;
    });
  });
  eleventyConfig.addCollection("tools", function(collectionApi) {
    return collectionApi.getFilteredByGlob("*/tools/*.md");
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
