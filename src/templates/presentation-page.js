import { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'
import PresentationPageTemplate from './presentation-template'
import PropTypes from 'prop-types'
import React from 'react'
import { graphql } from 'gatsby'

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
