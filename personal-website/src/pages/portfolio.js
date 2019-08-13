import React,  { Component }  from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Resume from "../documents/resume"

const IndexPage = () => (
    <Layout>
        <SEO title="Resume" />
        <h1>Resume</h1>
        <Resume/>
        <p>This site is currently under construction.</p>
        <p>Be sure to follow my progress in the site's <a href="https://github.com/jrmoulckers/jrmoulckers.git">GitHub Repo</a>!</p>
        Feel free to <Link to={"/contact"}>contact</Link> me for further information.
    </Layout>
  )

export default IndexPage