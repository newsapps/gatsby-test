import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
  <div style={{ color: `teal` }}>
  	<span><Link to="/">Home</Link></span>
	<span><Link to="/about/">About</Link></span>
    <Header headerText="Contact" />
    <p>Send us a message!</p>
  </div>
)