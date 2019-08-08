import React from "react"
import { StaticQuery, graphql } from "gatsby"
import chartStyles from "./chart.module.scss"

/// TODO ///
// Add charting here rather than `index.html`.
// Commented out for now because it sometimes stops local server.

// export default () => (
//   <StaticQuery
//     query={ graphql`
//   		allGoogleSpreadsheetSheetSheet {
//   		  nodes {
//   		    city
//   		    number
//   		  }
//   		}
// 	`}
// 	render={ data => (
// 	    console.log(data.allGoogleSpreadsheetSheetSheet.nodes)
// 	    data.allGoogleSpreadsheetSheetSheet.nodes.map(item =>
// 	    	<div class="city-list">{item.city}, {item.number}</div>);
// 	)}
//   />
// )