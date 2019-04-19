import React from 'react';
// import { Link } from 'gatsby';

import { ExternalAnchor } from './common/anchor';
import { PatentsQuery } from '../queries/PatentsQuery';
import '../styles/patents.scss';

export const Patents = () => (
  <PatentsQuery
    render={data =>
      data.allPatentsJson.edges.map(({ node: patent }) => (
        <div className="patent" key={patent.id} id={patent.id}>
          <p>
            <strong>
              <ExternalAnchor key={patent.id} href={patent.href}>
                {patent.name}
              </ExternalAnchor>
            </strong>
          </p>
          <img
            srcSet={patent.image.src.childImageSharp.fluid.srcSet}
            alt={patent.image.name}
          />
        </div>
      ))
    }
  />
);
