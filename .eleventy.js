const { EleventyServerlessBundlerPlugin } = require("@11ty/eleventy");
const fs = require("fs");

const functionsDir = "netlify/functions"
const inputDir = "content-merged";
const outputDir = "_site";

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyServerlessBundlerPlugin, {
    name: "dynamic",
    functionsDir: `./${functionsDir}/`,
    redirects: function(name, outputMap) {
      let redirects = "";
      for (const [key, value] of Object.entries(outputMap)) {
        redirects += `${key} /.${functionsDir}/${name} 200\n`
      }
      let redirectsFilename = `./${outputDir}/_redirects`;
      if (!fs.existsSync(`./${outputDir}`)) {
        fs.mkdirSync(`./${outputDir}`);
      }
      fs.writeFileSync(redirectsFilename, redirects);
    }
  });
  eleventyConfig.setUseGitIgnore(false);
  return {
    dir: {
      input: inputDir,
      output: outputDir,
    },
    dataTemplateEngine: "liquid",
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "liquid",
  };
};
