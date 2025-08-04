/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.sandetailing.ro/',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 7000,
  exclude: ['/404', '/500'],
};

