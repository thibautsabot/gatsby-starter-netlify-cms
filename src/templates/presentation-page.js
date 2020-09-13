import Content, { HTMLContent } from '../components/Content'

import Layout from '../components/Layout'
import PropTypes from 'prop-types'
import React from 'react'
import { graphql } from 'gatsby'

export const PresentationPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section role="main" className="section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h1 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h1>
              <PageContent className="content justified" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

PresentationPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const PresentationPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <PresentationPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

PresentationPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default PresentationPage

export const presentationPageQuery = graphql`
  query PresentationPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
