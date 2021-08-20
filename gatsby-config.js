// @ts-check
const CSS_MODULE_LOCAL_IDENT_NAME = '[local]___[hash:base64:5]';

// css-loader 4+ hash 算法 md4, generic-names 3.0 md4
const genericNames = require('generic-names');

module.exports = {
  siteMetadata: {
    title: `Eren 开发者文档`,
    description: `Eren 开发者文档`,
    author: `QM`,
    siteUrl: `https://qianmi-resources.oss-cn-hangzhou.aliyuncs.com/eren-docs/api-doc/index.html`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-less`,
      options: {
        lessOptions: {
          javascriptEnabled: true
        },
        cssLoaderOptions: {
          modules: {
            getLocalIdent: (context, _localIdentName, localName, _options) => {
              return genericNames(CSS_MODULE_LOCAL_IDENT_NAME)(localName, context.resourcePath);
            }
          }
        },
        modifyLessRule: (lessRule, _context) => {
          lessRule.exclude = [/node_modules/].concat(lessRule.exclude);
          return lessRule;
        },
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
        ignore: [`*/components/**/*.*`],
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/docs`,
      },
    },
    {
      resolve: 'gatsby-plugin-antd',
      options: {
        style: true
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `docs`,
        path: `${__dirname}/docs`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          docs: require.resolve("./src/components/MDLayout/index.tsx"),
          default: require.resolve("./src/components/MDLayout/index.tsx"),
        },
      },
    },
    {
      resolve: `gatsby-plugin-react-css-modules`,
      options: {
        webpackHotModuleReloading: true,
        autoResolveMultipleImports: true,
        // src-pages-Home-components-___index__header-wrapper___2leIZ
        generateScopedName: CSS_MODULE_LOCAL_IDENT_NAME,
        attributeNames: { activeStyleName: 'activeClassName' },
        filetypes: {
          '.less': {
            syntax: 'postcss-less',
          },
        },
      },
    },
  ],
}
