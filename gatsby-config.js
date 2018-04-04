module.exports = {
  siteMetadata: {
    title: 'الفهد للديكور والتشطيبات',
    description: 'add right description',
    image: '/img/site-preview.jpg',
    url: 'https://cranky-wescoff-204720.netlify.com',
    navLinks: [
      { path: 'about', name: 'عن الشركة' },
      { path: 'outdoor', name: 'واجهات' },
      { path: 'indoor', name: 'تشطيبات' },
      { path: 'electrical', name: 'اعمال كهرباء' },
      { path: 'contacts', name: 'اتصل بنا' },
    ],
    footerLinks: [
      { path: '', name: 'الرئيسية' },
      { path: 'about', name: 'عن الشركة' },
      { path: 'outdoor', name: 'واجهات' },
      { path: 'indoor', name: 'تشطيبات' },
      { path: 'electrical', name: 'اعمال كهرباء' },
      { path: 'contacts', name: 'اتصل بنا' },
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/data`,
        name: 'data',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
  ],
}
