/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.sandetailing.ro/',
  generateRobotsTxt: true,
  changefreq: 'hourly',
  priority: 0.9,
  exclude: ['/404', '/500'],
};

