const { EleventyServerlessBundlerPlugin } = require("@11ty/eleventy");
const fs = require("fs-extra");

const functionsDir = "netlify/functions"
const inputDir = "content-merged";
const outputDir = "_site";

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyServerlessBundlerPlugin, {
    name: "dynamic",
    functionsDir: `./${functionsDir}/`,
    //inputDir: `${inputDir}/-serverless`,
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

  // eleventyConfig.setWatchThrottleWaitTime(5000);
  eleventyConfig.addWatchTarget("content-private");
  eleventyConfig.addWatchTarget("content-public");
  eleventyConfig.on('eleventy.before', async () => {
    console.log("");
    console.log("");
    console.log("eleventy.before");
    fs.copySync('content-private', inputDir);
    fs.copySync('content-public', inputDir);
    //fs.copySync('content-private', `${inputDir}-serverless`);
    //fs.copySync('content-public', `${inputDir}-serverless`);
    console.log('merged!')
  });
  eleventyConfig.on('eleventy.after', async () => {
    console.log("eleventy.after");
    //fs.rmSync(inputDir, { recursive: true });
    //console.log('removed!')
  });
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
