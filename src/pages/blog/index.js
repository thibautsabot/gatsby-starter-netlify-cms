import { StaticQuery, graphql } from "gatsby";

import BlogRoll from "../../components/BlogRoll";
import React from "react";

// Only used for squared thumbnail on homepage and tags
// https://www.gatsbyjs.com/docs/reference/release-notes/image-migration-guide/

export const featuredImageFragment = graphql`
  fragment featuredImageFragment on ImageSharp {
    gatsbyImageData(
      width: 120
      height: 120
      layout: FIXED
      placeholder: DOMINANT_COLOR
      transformOptions: { fit: COVER, cropFocus: CENTER }
      formats: [AUTO, WEBP]
    )
  }
`;

const query = graphql`
  query BlogRollQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      limit: 6
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
                ...featuredImageFragment
              }
            }
          }
        }
      }
    }
  }
`;
export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <StaticQuery
        query={query}
        render={(data, count) => <BlogRoll data={data} count={count} />}
      />
    );
  }
}
