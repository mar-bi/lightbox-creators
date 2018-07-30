module.exports = {
  siteMetadata: {
    title: 'الفهد للديكور والتشطيبات',
    url: 'https://cranky-wescoff-204720.netlify.com',
    description: `شركة الفهد ديكورايشن شركة متخصصة فى التشطيبات (مصانع - شركات 
      - كومباوندات - فيلل ). اعمال الواجهات ( الكلادينج  و السيمى استراكتشر 
      والحجر الهشمة) و الاعمال الكهربائية المتكاملة - من التأسيس الى التسليم. 
      الشركة متواجدة فى السوق منذ (11 عام ) 2007 ز نفذت الشركة خلال هذه الفترة 
      العديد من الاعمال و المشروعات الخاصة و الحكومية( بنوك و مكاتب بريد و 
      مديريات امن و اقسام شرطة و مشروعات فى قطاع قوات الامن ) فى كافة انحاء 
      جمهورية مصر العربية. يقع المقر الرئيسى للشركة فى محافظة الجيزة - هضبة 
      .الاهرام, كما بوجد فرع للشركة فى مدينة الغردقة - محافظة البحر الاحمر`,
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
        path: `${__dirname}/static/img`,
        name: 'assets',
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
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              name: 'assets',
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
        ],
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
