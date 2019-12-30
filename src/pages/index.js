import React from "react"
import './index.scss'
import Layout from "../components/layout"
import SEO from "../components/seo"
import PresidentImage from '../images/president.png'
import Card from '../components/MainCard/card'
import SimpleCard from '../components/Card/SimpleCard'
import { useStaticQuery, graphql } from "gatsby"
const IndexPage = () => {
  const data = useStaticQuery(graphql`
query{
  allContentfulSiteHeading {
    edges {
      node {
        title
        subHeading
      }
    }
    nodes {
      description {
        content {
          content {
            value
          }
        }
      }
    }
  }
}
`)

  console.log(data.allContentfulSiteHeading.nodes[0].description.content[0].content[0].value)
  
  //   data.allContentfulHoverCardsDescriptionRichTextNode.nodes.map((value) => {
  //      return console.log(value.content[0].content[0].value)
  //  })
   

  return (
    <Layout>
      <SEO title="Home" />
      {/* <div className="container" >
        <div className="col-sm-4">
          <img className="main-img" alt="main-image" src={PresidentImage} />
        </div>

        <div className="col-lg-8">
          <span className="main-heading">
           {data.allContentfulSiteHeading.edges[0].node.title}
        </span>
          <span className="main-sub-heading">
            {data.allContentfulSiteHeading.edges[0].node.subHeading}
        </span>
          <div className="disrc">
            <span className="main-des">
              {data.allContentfulSiteHeading.nodes[0].description.content[0].content[0].value}
        </span>
          </div>
          <span className="demo text">
            <p style={{ fontWeight: '800', fontSize: '25px', transform: "scale(1.2, 1.5)" }}>65K+</p>
            <p style={{ fontSize: '8px', fontWeight: "700" }}>Application Recieved</p>
          </span>
        </div>
      </div> */}

      {/* Cards Section  */}

      <div className="card-div">
        <div className="card-heading">
          <span className="heading">Available Programs</span>
        </div>
        <div className="row">
          <Card heading="Artifical Intelligence" />
          <Card heading="Cloud Native and Mobile Web" />
          <Card heading="Blockchaoin" />
          <Card heading="Internet of Things " />
        </div>
      </div>

      {/* Horizental Card Changing Section */}
{/* 
      <div className="rotating-card-section">
        <div style={{ borderTop: '3px solid black', width: '110px' }}></div>
        <div className="rotate-section-heading">
          <span className="text-heading">Programs In Development</span>
        </div>
        <div style={{ display: 'inline' }}>
          <SimpleCard title="SDN/NFV for 5G" />
          <SimpleCard title="AUGMENTED" />
          <SimpleCard title="ENTERPRENEURSHIP" />

        </div>
      </div> */}
    </Layout >
  )
}
export default IndexPage
