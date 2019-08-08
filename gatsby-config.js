/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  	// You can call in the info in siteMetadata like this: {data.site.siteMetadata.title} 
    // and include it wherever you want, which is great for consistency. You can also put 
    // other things in here.
    siteMetadata: {
    	title: `Coolest cities (Gatsby test)`
  	},
    // This is where/how plugins get included! There are a ton! https://www.gatsbyjs.org/plugins/
    // For some, you only have to include them here. For others, you may need to run something 
    // like `npm install <plugin>` as well.
  	plugins: [
      // SASS plugin
      { resolve: `gatsby-plugin-sass` },
  		// Google Spreadsheet plugin
      {
  			resolve: 'gatsby-source-google-spreadsheet',
  			options: {
  				/// TODO ///
          // Find a better way to include credentials without literally displaying in the config.
          credentials: {
            client_email: "gatsby-spreadsheet@gatsby-2019.iam.gserviceaccount.com",
            private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCuT6NTCf5cILhY\nQrqiah7ukgW1yzOR2brT2V1jiux77q22ljeB2XcnVivg97MWLKpPbghvV+zd7QLi\n4WQZL0f7x5W0yTs8CU6cyVNn/dWewEyWQbKifxWoJZiOhxw7cLIoZkY0Vtz9WQy3\nt0rvwMrkRpvA8dSVtgfOr2uSIAxA5vqsvl9VkT+WFy3bU1oKdUcUWGqhB2kg9wJh\nXLFdfGewt1xezEiFom2WTHx1lltQ5NURJALzo9GfelMfeBR2BPlRdrDp+vpPT1V4\nv90JO7V7yaJm5LeyOX1eKmcrQRw/gKnA9XYifdKl00sTIM4p3Rl6mJZe1iPkWVNj\nWGhW+zzZAgMBAAECggEABO85tSXVBsghV9RJwsPEzOWi1j7inpgejxU57NG3uJls\n3vyZJSqiEiHBG7z/W5sXliiMAhTn3m9xc7lEM2dQfxrrDMNekyhDSrJzU0APDk+s\ny1sgQrPcydYIn85I2RDrZjPg/GXSGzTsZH4Cl89qHvS1v4xJA5Tz2yDBp5ETL7oe\nK3Xba1+TtvsCh14xAnx81yTFIGvjVukh3iXa8PjRdeANrw/WV/0eK6rA5wga20Ik\nsiV8C5t0rXMtF/ZMTagtQa/PL7G890T8CnbulMeYlZ1vhXTlNTMqrL9gl6Scmyuk\n0LWEWeElLHm9C+jDkdPjp+GAF7S6T7QO3r7k4tFHJQKBgQDqjmgtu0nqUqdpl5Un\nr6oUqLCYdMqCl2QjXmBEWdzXqtwo0YeBYGJHI+fc1JhI/XXAZX3AlIvaxzTuEgK6\n3T5pix51jXafFP3mR/WSWj9oFaH3MVp4V28fdnTkZjugPnEDl2vIKYMaiKQdEV0u\nqQLVHi1PT98STp1fnICew3h3/QKBgQC+Pz4qiJUTkuLP1n77K3/GzqVVnQFtPYMr\n1Ob04tDMeAnVL/yW38eP7tVHufeRMGt3A936vl+TF+c2doQLH3zsUFKF368TXsDi\nhSNsxYWeMhi/VejQkpbG7MXZj30nT3AI6YAmcwd5wwWkhGUSDeF6p/H9p89t+f/m\njpyBAB5JDQKBgFjWcxLPGuHLSGkv5mhPmkWU1r4HjiQEHwNeXWvF9WUh65zyLzaL\nQO3c5Za4Vq1egljKl+R23rmQNbXt0GbiIR9sd67iU4lRNBEiNBqoX9eWSfAMG031\nH7t07DUNm4vH2poXodUAFA3arv3rc7WWgeIiOdsOT1jpuaVa60Q2mMwpAoGBAI9d\ng1B0KrtcZpWvE3PdvOWplghlT8ztnOqr/vut7SEYmHhSOCvOKUn69jieGMUN0v4W\nKPKrAcUML03ok+r56J8AjJ+cCAg10G8jW6W9V8r1/5Y4fECpJvxzM0mXCv5Tq57b\nr5nJ92k3oQnwR2YKlc9jvkWjbvp2efRZpfDEkQ4FAoGBAJLgC5YaWiFjn2EGtlGa\nKxunQ+zU/TtReRNCA9fjTdlxzH7uqHPrTTZ58TAf8VfI1T01rqY2LPXYsgxfU6ut\nbJrxof0hp00dDKldxFOl5QbvoXhF7T3Bq5RK9uFpxSOpaXvKIMjmYmACgeP1XNNq\n4ThWdWJOMDXLaJN2Mj8n3kih\n-----END PRIVATE KEY-----\n"
          },
          // Spreadsheet is here: https://docs.google.com/spreadsheets/d/1Zik8-M_A7x0FWJ8Vo17wTbcJWSy03waikhtabgfM8jY/edit#gid=838227793
          spreadsheetId: '1Zik8-M_A7x0FWJ8Vo17wTbcJWSy03waikhtabgfM8jY',
          typePrefix: 'GoogleSpreadsheet',
    			spreadsheetName: 'Sheet'
  			}
		  },
  		// Filesystem data plugin
      // I don't toooootally understand this one tbh.
      // https://www.gatsbyjs.org/packages/gatsby-source-filesystem/
      {
      		resolve: `gatsby-source-filesystem`,
      		options: {
        		name: `src`,
        		path: `${__dirname}/src/`
      		}
    	},
      // S3 plugin
 		 {
      		resolve: `gatsby-plugin-s3`,
      		options: {
      			pathPrefix: `/gatsby.chicagotribune.com`,
      			bucketName: 'gatsby-test-nausheen2',
      			acl: null
      	 	}
 		 }
	]
}