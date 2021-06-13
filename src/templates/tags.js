import Banner from "../components/Banner";
import BlogRoll from "../components/BlogRoll";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import React from "react";
import { graphql } from "gatsby";

const TITLE = {
  autres: "Autres",
  divers: "Autres articles",
  zerodechet: "Zéro Déchet",
  entree: "Entrées",
  vegetarien: "Plats végétariens",
  boissons: "Boissons",
  plats: "Plats",
  antiinflam: "Anti-inflammatoire",
  dessert: "Desserts",
  petitdej: "Petits déjeuners",
  antigaspi: "Anti-gaspi",
};

const TagRoute = ({ pageContext, data }) => {
  const tag = pageContext.tag;
  const title = data.site.siteMetadata.title;

  return (
    <Layout>
      <section>
        <Helmet title={`${tag} | ${title}`} />
        <Banner title={TITLE[tag] || "Blog"} />
        <div className="container content">
          <div role="main">
            <BlogRoll data={data} />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TagRoute;

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
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
            date
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
