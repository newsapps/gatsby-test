import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
  <div style={{ color: `teal` }}>
  	<span><Link to="/">Home</Link></span>
	<span><Link to="/contact/">Contact</Link></span>
    <Header headerText="About Gatsby" alternatePhrase="By Naush" />
    <p>Such wow. Very React.</p>
    <p>Such wow. Very React.</p>
    <Header headerText="Test site by Naush" />
    <p>Such wow. Very React.</p>
    <p>Such wow. Very React.</p>
  </div>
)

// export subhed () => (
// 	<div style={{ color: `purple` }}>
// 		<Header subhedText="Test site by Naush" />
// 	</div>
// )