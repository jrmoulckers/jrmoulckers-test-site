import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/profile-pic"
import SEO from "../components/seo"

const AboutPage = () => (
    <Layout>
      <SEO title="About" />
      <h1>About</h1>
      <h3>Who am I?</h3>
        <li>Advocate for industry diversity, inclusion, and equality</li>
        <li>Eagle Scout</li>
        <li>Professional Development Officer for the Hispanic Association of Computer Scientists</li>
        <li>Aspiring leader and revolutionist in tech</li>
        <li>Driven, focused, and turning a “NO” into New Opportunities</li>
        <p>My vision includes an autonomous and connected world of tomorrow, with opportunity for people of any background to find their place in tech. Will you join me?</p>
            Please feel free to contact me if you wish to discuss more!
            I am a Computer Science student at the University of Texas at Austin, and I expect to graduate in the Spring of 2022 with a Bachelors of Science in Computer Science and a minor in Business. 
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem`, marginTop: `1.45rem`}}>
        <Image/>
      </div>
    </Layout>
  )
  
  export default AboutPage
 