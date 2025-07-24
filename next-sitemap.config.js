/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'http://ec2-3-93-181-219.compute-1.amazonaws.com',
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  sitemapSize: 5000,
  exclude: ['/server-only', '/private-page'],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: ['/private-page'] },
    ],
  },
};
