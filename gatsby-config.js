require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Rodolfo Pardo - Data Analyst`,
    description:
      "Análisis, Extracción, Limpieza y Visualización de datos desde Mendoza a todo Argentina",
    twitterUsername: "@rodipardo_"
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_API_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-157539657-1",
      },
    },    
  ],
}
