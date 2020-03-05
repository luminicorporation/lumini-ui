import React from 'react';
// import { Link } from 'gatsby';

import { ExternalAnchor } from './common/anchor';
import { PatentsQuery } from '../queries/PatentsQuery';
import '../styles/patents.scss';

export const Patents = () => (
  <PatentsQuery
    render={data => (
      <>
        <p>
          <strong>European Patents:</strong> 003000868-0001, 003000868-0002,
          003000868-0003, 003000868-0004, 003000868-0005, 003000868-0006,
          003000868-0007, 003000868-0008, 003000868-0009, 003000868-0010,
          003000868-0011, 003000868-0013.
        </p>
        <p>
          <strong>Singapore Patent:</strong> 11201604852Q
        </p>
        {data.allPatentsJson.edges.map(({ node: patent }) => (
          <div className="patent" key={patent.id} id={patent.id}>
            <p>
              <strong>
                <ExternalAnchor {...patent.anchorProps}>
                  {patent.name}
                </ExternalAnchor>
              </strong>
            </p>
            <img
              srcSet={patent.image.src.childImageSharp.fluid.srcSet}
              alt={patent.image.name}
            />
          </div>
        ))}
      </>
    )}
  />
);
