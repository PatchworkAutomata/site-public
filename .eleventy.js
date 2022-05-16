const { EleventyServerlessBundlerPlugin } = require("@11ty/eleventy");
const fs = require("fs-extra");
const klawSync = require('klaw-sync')

const functionsDir = "netlify/functions"
const inputDirPublic = "content-public";
const inputDirPrivate = "content-private";
const inputDirMerged = "src";
const outputDir = "_site";

module.exports = function (eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.addWatchTarget(inputDirPrivate);
  eleventyConfig.addWatchTarget(inputDirPublic);
  eleventyConfig.on('eleventy.before', async () => {
    const cwd = process.cwd();
    if (cwd.includes(functionsDir)) {
      return;  // We are in the Serverless Function and don't have inputDirPublic and
               // inputDirPrivate, but fortuantely inputDirMerged is already set up.
    }
    for (const contentDir of [inputDirPublic, inputDirPrivate]) {
      const contentFiles = klawSync(contentDir, {nodir: true})
      for (const index in contentFiles) {
        const localPath = contentFiles[index]["path"].replace(`${cwd}/${contentDir}/`, '');
        fs.copySync(`${contentDir}/${localPath}`,
                    `${inputDirMerged}/${localPath}`,
                    { filter: (src, dest) => {
                      //TODO if needed, I can make this more efficient by pre-fetching the fs.Stats
                      if (!fs.existsSync(src)) {
                        return false;
                      } else if (!fs.existsSync(dest)) {
                        return true;
                      } else {
                        return fs.statSync(src).mtimeMs > fs.statSync(dest).mtimeMs;
                      }
                    } });
      }
    }
  });
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
  return {
    dir: {
      input: inputDirMerged,
      output: outputDir,
    },
    dataTemplateEngine: "liquid",
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "liquid",
  };
};
