module.exports = function (eleventyConfig) {
  return {
    dir: {
      // default: [site root]
      input: "src",
      output: "_site",
    },
    dataTemplateEngine: "liquid",
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "liquid",
  };
};
