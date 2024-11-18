const SITE = require('./src/config.js').SITE;

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: `${SITE.origin}/`,
  generateRobotsTxt: true,
};
