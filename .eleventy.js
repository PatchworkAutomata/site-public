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

  // Shortcodes
  eleventyConfig.addShortcode("compareItemStatus", function(item, status) {
    return "status" in item.data && item.data["status"] === status;
  });
  eleventyConfig.addShortcode("checkItemTags", function(item, tag) {
    console.log(item.data.tags)
    return  "tags" in item.data && item.data.tags.includes(tag);
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
