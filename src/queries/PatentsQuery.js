import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

// Returns patents obtained from `src/data/patents.json` and appends the srcSet
// of the images obtained after parsing `src/images/patents/*`
export const PatentsQuery = ({ render }) => {
  return (
    <StaticQuery
      query={graphql`
        query PatentsQuery {
          allPatentsJson(sort: { order: ASC, fields: [position] }) {
            edges {
              node {
                id
                name
                href
                image {
                  name
                  src {
                    childImageSharp {
                      fluid {
                        srcSet
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={render}
    />
  );
};
