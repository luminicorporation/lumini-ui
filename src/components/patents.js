import React from 'react';
// import { Link } from 'gatsby';

import { ExternalAnchor } from './common/anchor';
import { PatentsQuery } from '../queries/PatentsQuery';
import fbiAntiPiracyLogo from '../images/fbi-anti-piracy.png';
import '../styles/patents.scss';

export const Patents = () => (
  <PatentsQuery
    render={data => (
      <>
        <p>
          <small>
            <i>
              The unauthorized reproduction or distribution of a copyrighted
              work is illegal. Criminal copyright infringement, including
              infringement without monetary gain, is investigated by the FBI and
              is punishable by fines and federal imprisonment.
            </i>
          </small>
        </p>
        {data.allPatentsJson.edges.map(({ node: patent }) => (
          <div key={patent.id} id={patent.id}>
            <h2>
              <ExternalAnchor key={patent.id} href={patent.href}>
                {patent.name}
              </ExternalAnchor>
            </h2>
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
