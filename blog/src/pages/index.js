import * as React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { Box, Card, Heading } from "rebass";

import Layout from "../components/layout";
import Seo from "../components/seo";
import * as styles from "../components/index.module.css";

const Grid = styled(Box)`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  display: grid;
  gap: 100px;
  grid-template-columns: repeat(auto-fit, minmax(128px, 1fr));
`;

const IndexPage = ({ data }) =>
(
  <Layout>
    <Grid>
    {
      data.allContentfulBlogPost.edges.map((edge) =>
      (
        <Card width={256} p={3} key={edge.node.id}>
          <Link to={edge.node.slug}>{edge.node.title}</Link>
          <div>
            <GatsbyImage 
              image={edge.node.heroImage.gatsbyImageData}
              alt={edge.node.heroImage.description}
            />
          </div>
          <div>
            {edge.node.body.childMarkdownRemark.excerpt}
          </div>
        </Card>
      ))
    }
    </Grid>
  </Layout>
);

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />;

export default IndexPage;

export const query = graphql`
  {
    allContentfulBlogPost(sort: { createdAt: DESC }) {
      edges {
        node {
          id
          title
          slug
          tags
          body {
            childMarkdownRemark {
              excerpt
            }
          }
          heroImage {
            description
            gatsbyImageData(
              layout: CONSTRAINED,
              placeholder: BLURRED,
              width: 600
            )
          }
        }
      }
    }
  }
`;
