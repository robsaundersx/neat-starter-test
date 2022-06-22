const yaml = require("js-yaml");
const { DateTime } = require("luxon");
const markdownIt = require("markdown-it");
const markdownItDefList = require("markdown-it-deflist");
const markdownItAnchor = require("markdown-it-anchor");
const markdownItAttrs = require('markdown-it-attrs');
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const Prism = require("prismjs");
const PrismLoader = require("prismjs/components/index.js");
const htmlmin = require("html-minifier");

PrismLoader.silent = true;

module.exports = function (eleventyConfig) {
  // Disable automatic use of your .gitignore
  eleventyConfig.setUseGitIgnore(false);
  // Merge data instead of overriding
  eleventyConfig.setDataDeepMerge(true);

  // human readable date
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(
      "dd LLL yyyy"
    );
  });

  // Customize Markdown library and settings:
  let markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true
  }).use(markdownItAttrs, {
    // optional, these are default options
    leftDelimiter: '{',
    rightDelimiter: '}',
    allowedAttributes: []  // empty array = all attributes are allowed
  }).use(markdownItDefList, {
  });
  // // .use(markdownItAnchor, {
  // //   permalink: markdownItAnchor.permalink.ariaHidden({
  // //     placement: "after",
  // //     class: "direct-link",
  // //     symbol: "#",
  // //     level: [1,2,3,4],
  // //   }),
  // //   slugify: eleventyConfig.getFilter("slug")
  // // })
  let default_code_inline_rule = markdownLibrary.renderer.rules.code_inline;
  markdownLibrary.renderer.rules.code_inline = (tokens, idx, options, env, slf) => {
    const token = tokens[idx];
    let str = tokens[idx].content;
    let tokenClassIndex = token.attrIndex("class");
    if (tokenClassIndex >= 0) {
      let tokenClass = token.attrs[tokenClassIndex];
      let regexpLanguage = /language-([a-z]+)/gi;
      let match = regexpLanguage.exec(tokenClass);
      if (match) {
        let language = match[1];
        if ( ! Prism.languages[language] ) { PrismLoader(language); }
        let highlighted = Prism.highlight(str, Prism.languages[language], language) || renderer.escapeHtml(str);
        // let highlighted = Prism.highlight(str, Prism.languages[language], language);
        return "<code" + slf.renderAttrs(token) + ">" + highlighted + "</code>";
      }
    }
    return default_code_inline_rule(tokens, idx, options, env, slf);
  };
  eleventyConfig.setLibrary("md", markdownLibrary);

  // Syntax Highlighting for Code blocks
  eleventyConfig.addPlugin(syntaxHighlight);

  // To Support .yaml Extension in _data
  // You may remove this if you can use JSON
  eleventyConfig.addDataExtension("yaml", (contents) => yaml.load(contents));

  // Copy Static Files to /_Site
  eleventyConfig.addPassthroughCopy({
    "./src/admin/config.yml": "./admin/config.yml",
    "./node_modules/alpinejs/dist/cdn.min.js": "./static/js/alpine.js",
    "./node_modules/prismjs/themes/prism.css":
      "./static/css/prism.css",
  });

  // Copy Image Folder to /_site
  eleventyConfig.addPassthroughCopy("./src/static/img");

  // Copy favicon to route of /_site
  eleventyConfig.addPassthroughCopy("./src/favicon.ico");

  // Minify HTML
  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    // Eleventy 1.0+: use this.inputPath and this.outputPath instead
    if (outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }

    return content;
  });

  // Let Eleventy transform HTML files as nunjucks
  // So that we can use .html instead of .njk
  return {
    dir: {
      input: "src",
    },
    htmlTemplateEngine: "njk",
  };
};
