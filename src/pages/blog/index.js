import BlogRoll from '../../components/BlogRoll'
import Layout from '../../components/Layout'
import React from 'react'
import Banner from '../../components/Banner'
import { graphql, StaticQuery } from 'gatsby'

const query = graphql`
query BlogRollQuery {
  allMarkdownRemark(
    sort: { order: DESC, fields: [frontmatter___date] }
    filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
  ) {
    edges {
      node {
        excerpt(pruneLength: 400)
        id
        fields {
          slug
        }
        frontmatter {
          title
          templateKey
          date(formatString: "MMMM DD, YYYY")
          featuredpost
          featuredimage {
            childImageSharp {
              fluid(maxWidth: 120, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
}
`
export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Banner />
        <section className="section">
          <div className="container">
            <div className="content">
              <StaticQuery
                query={query}
                render={(data, count) => <BlogRoll data={data} count={count} />}
              />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
