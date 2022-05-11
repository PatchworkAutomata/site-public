const { EleventyServerlessBundlerPlugin } = require("@11ty/eleventy");
const fs = require("fs");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyServerlessBundlerPlugin, {
    name: "dynamic",
    functionsDir: "./netlify/functions/",
    redirects: function(name, outputMap) {
      let _redirects = "";
      for (const [key, value] of Object.entries(outputMap)) {
        _redirects += `${key} /.netlify/functions/${name} 200\n`
      }
      let redirectsFilename = "./_site/_redirects";
      fs.mkdirSync("./_site");
      fs.writeFileSync(redirectsFilename, _redirects);
    }
  });
  //eleventyConfig.addPassthroughCopy("_redirects");
  eleventyConfig.setUseGitIgnore(false);
  return {
    dir: {
      input: "content-merged",
      output: "_site",
    },
    dataTemplateEngine: "liquid",
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "liquid",
  };
};
