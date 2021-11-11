module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "church",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Poppins\:100, 200, 300, 400, 500, 600, 700, 800, 900`,
          `Oxygen`, // second font
        ],
        display: 'swap'
      },
    },
    "gatsby-plugin-mdx",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
      __key: "pages",
    },
    `gatsby-transformer-remark`,
    
  ],
};