import React from "react"
import { Link, graphql } from "gatsby"
import "bootstrap/dist/css/bootstrap.css"
import "./index.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaCheckCircle } from "react-icons/fa"
import Sidebar from "../components/sidebar/Sidebar"
import TechTag from "../components/tags/TechTag"

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges
  const labels = data.site.siteMetadata.labels
  const currentPage = 1
  const postsPerPage = 3 // see limit in graphql query below
  const nextPage = (currentPage + 1).toString()
  const hasNextPage = data.allMarkdownRemark.totalCount > postsPerPage

  const getTechTags = (tags) => {
    const techTags = []
    tags.forEach((tag, i) => {
      labels.forEach((label) => {
        if (tag === label.tag) {
          techTags.push(<TechTag key={i} tag={label.tag} tech={label.tech} name={label.name} size={label.size} color={label.color} />)
        }
      })
    })
    return techTags
  }


  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `javascript`, `react`, `web development`, `blog`, `graphql`]} />
      <div className="index-main">
        <div className="sidebar px-4 py-2">
          <Sidebar />
        </div>
        <div className="post-list-main">
        


        <h1>Information personnelle</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      gfsgfhg
    </div>


<h2>FORMATIONS</h2>
<div> <span className="text-success d-inline-block" title="blazing">
                                <FaCheckCircle size={26} style={{ color: "success" }} />
                            </span>
  <p>Technicien supérieur en Informatique (L'Institut Supérieur des Etudes Technologiques de CHARGUIA)</p>                 
                            
 </div>
 <div>  
 <span className="text-success d-inline-block" title="blazing">
                                <FaCheckCircle size={26} style={{ color: "success" }} />
                            </span>

 <p>Licence Informatique Juillet 2016</p>
 </div>
 <div>
 <span className="text-success d-inline-block" title="blazing">
                                <FaCheckCircle size={26} style={{ color: "success" }} />
                            </span>

 <p>Mastère de Sécurité des Systèmes d’Informations et des infrastructures (SSII) 2020</p>
 </div>


<h2> Langues</h2>
<ul>
<li>Arabe: langue marternelle</li>
<li>Français: Courant</li>
<li>Anglais: moyen</li>

</ul>






        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
         query IndexQuery {
           site {
             siteMetadata {
               title 
               author
               labels {
                 tag
                 tech 
                 name 
                 size 
                 color
               } 
             }
           }
           allMarkdownRemark(
             limit: 3
             sort: { fields: [frontmatter___date], order: DESC }
             filter: { frontmatter: { published: { eq: true } } }
           ) {
             totalCount
             edges {
               node {
                 excerpt(pruneLength: 200)
                 html
                 id
                 frontmatter {
                   title
                   date(formatString: "MMMM DD, YYYY")
                   tags
                 }
                 fields {
                   slug
                 }
               }
             }
           }
         }
       `

export default IndexPage

