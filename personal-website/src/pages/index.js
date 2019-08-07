import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/profile-pic"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Home</h1>
    <p>Welcome to my personal site.</p>
    <p>This site is currently under construction.</p>
    <p>Be sure to follow my progress in the site's <a href="https://github.com/jrmoulckers/jrmoulckers.git">GitHub Repo</a>!</p>
    Feel free to <Link to={"/contact"}>contact</Link> me for further information.
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem`, marginTop: `1.45rem`}}>
  <Image/>
    </div>
  </Layout>
)

export default IndexPage
