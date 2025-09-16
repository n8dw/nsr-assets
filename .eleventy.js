module.exports = function(eleventyConfig) {
  eleventyConfig.setTemplateFormats([
    // Templates:
    "html",
    "njk",
    "md",
    // Static Assets:
    "css",
    "jpeg",
    "jpg",
    "png",
    "svg",
    "woff",
    "woff2"
  ]);

  // Add passthroughs
  eleventyConfig.addPassthroughCopy("public");
  eleventyConfig.addPassthroughCopy("src/robots.txt");

  // Disable Browsersync ghost mode
  eleventyConfig.setBrowserSyncConfig({ 
    ghostMode: false 
  });

  // Return the directory configuration
  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "build"
    }
  };
};