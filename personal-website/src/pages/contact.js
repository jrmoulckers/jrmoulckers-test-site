import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/profile-pic"
import SEO from "../components/seo"

const ContactPage = () => (
    <Layout>
      <SEO title="Contact" />
      <h1>Contact</h1>
      <h3>Please feel free to contact me on any of these platforms:</h3>
      <div><a href="tel:5126361335">(512) 636-1335</a></div>
      <div><a href="mailto:jrmoulckers@gmail.com">jrmoulckers@gmail.com</a></div>
      <div><a href="mailto:jrmoulckers@utexas.edu">jrmoulckers@utexas.edu</a></div>
      <div><a href="https://www.linkedin.com/in/jeffreymoulckers/">LinkedIn: Jeffrey Moulckers</a></div>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem`, marginTop: `1.45rem`}}>
        <Image/>
      </div>
    </Layout>
  )
  
  export default ContactPage