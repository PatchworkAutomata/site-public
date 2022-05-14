const { EleventyServerlessBundlerPlugin } = require("@11ty/eleventy");
const fs = require("fs-extra");

// var rsyncjsCJS = require('rsyncjs')
// var deasync = require('deasync')
// var rsync = deasync(rsyncjsCJS.async)

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
    const filterFunc = (src, dest) => {
      console.log(`filterFunc`);
      if (!fs.existsSync(dest)) {
        console.log(`  no ${dest} so early return true`);
        return true;
      }
      let fileHasChanged = Buffer.compare(fs.readFileSync(src), fs.readFileSync(dest)) != 0;
      console.log(`  return ${fileHasChanged}`);
      return fileHasChanged;
    }
    const copySyncOptions = { preserveTimestamps: true, filter: filterFunc};
    fs.copySync('content-public/index.md',
                `${inputDir}/index.md`,
                copySyncOptions);
        // rsync(srcDir, targetDir, {
    //   exclude: 'node_modules'
    // })
    //fs.copySync('content-private', `${inputDir}-serverless`);
    //fs.copySync('content-public', `${inputDir}-serverless`);
  });
  // eleventyConfig.on('eleventy.after', async () => {
  //   console.log("eleventy.after");
  //   //fs.rmSync(inputDir, { recursive: true });
  //   //console.log('removed!')
  // });
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
