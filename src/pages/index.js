import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
	<div style={{ color:'purple' }}>
		<span><Link to="/about/">About</Link></span>
		<span><Link to="/contact/">Contact</Link></span>
		<Header headerText="Hello Gatsby!" />
		<p>What a world!</p>
		<img src="https://fillmurray.com/g/200/300" />
	</div>
)
