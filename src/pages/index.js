import React from "react"
import { graphql } from "gatsby"

// These pull in components that you want on this page. 
// Style sheets like `container.module.scss` are imported with each of these

// import Container from "../components/container"
import Header from "../components/header"
// import Subhed from "../components/subhed"
// import Chatter from "../components/chatter"
// import Chart from "../components/chart"

/// TODO /// 
// This works but doesn't add width.
// Factor this better. Charting should go in `chart.js` using a StaticQuery (https://www.gatsbyjs.org/docs/static-query/).
export default ({ data }) => {
  const sheetData = data.allGoogleSpreadsheetSheetSheet.nodes;
  const rendered = sheetData.map(item =>
    <div className="hospital_bar">{item.hospital}</div>);
  
  return rendered;
};
// function addWidth(hospital){
  // const hospitalBar = document.getElementById({item.id});
    // hospitalBar.style.width={item.hours};
    // console.log(hospitalBar.width);
// };


//This is the part that pulls data as a json from the Sheet into the repo using graphql.
//The last "Sheet" in `allGoogleSpreadsheetSheetSheet` is the name of the sheet.
export const query = graphql`
  query {
    allGoogleSpreadsheetSheetSheet {
      nodes {
        hospital
        hours
        perc
        id
      }
    }
  }
`;

/// TODO ///
// Add <Chart> to this part.
// Commented out for now because you can't `export default` more than once on a page.

// export default ({ data }) => {
// 	<Container>
// 		<div style={{ color:`black`, margin: `10px` }}>
// 			<Header headerText={data.site.siteMetadata.title} />
// 			<Subhed subhedText="Cities are this percent awesome." />
// 			<Chatter chatterText="Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ." />
//     </div>
//   </Container>
// }

// export const sitequery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `;