/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  	plugins: [
 		{
    	 resolve: `gatsby-plugin-s3`,
    	 options: {
    	     pathPrefix: `/gatsby.chicagotribune.com`,
    	     bucketName: 'gatsby-test-nausheen2',
    	     acl: null
    	 },
 		},
	]
}
