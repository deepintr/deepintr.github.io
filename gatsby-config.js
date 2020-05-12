/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Deepin Türkiye',
    description: 'Linux Deepin Türkiye Kullanıcı Topluluğu',
    siteUrl: 'https://deepintr.org',
    author: '',
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Deepin Türkiye`,
        short_name: `DeepinTR`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/deepintr-icon.png`,
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-jss`,
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$|\.ts$|\.tsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
        ignore: [`**/_template*`, `**/README.*`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-copy-linked-files`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-130014661-1`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-flexsearch',
      options: {
        languages: ['tr'],
        type: 'MarkdownRemark',
        fields: [
          {
            name: 'title',
            indexed: true,
            resolver: 'frontmatter.title',
            attributes: {
              encode: 'balance',
              tokenize: 'strict',
              threshold: 6,
              depth: 3,
            },
            store: true,
          },
          {
            name: 'body',
            indexed: true,
            resolver: 'rawMarkdownBody',
            attributes: {
              encode: 'balance',
              tokenize: 'strict',
              threshold: 6,
              depth: 3,
            },
            store: false,
          },
          {
            name: 'excerpt',
            indexed: true,
            resolver: 'excerpt',
            attributes: {
              encode: 'balance',
              tokenize: 'strict',
              threshold: 6,
              depth: 3,
            },
            store: false,
          },
          {
            name: 'slug',
            indexed: false,
            resolver: 'fields.slug',
            store: true,
          },
        ],
      },
    },
  ],
};
