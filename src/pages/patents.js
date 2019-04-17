import React from 'react';
// import { Link } from 'gatsby';
import { css } from '@emotion/core';

import GreaterThanCaret from '../components/greaterThanCaret';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Content from '../components/content';
import { ExternalAnchor } from '../components/common/anchor';
import { PatentsQuery } from '../queries/PatentsQuery';
import fbiAntiPiracyLogo from '../images/fbi-anti-piracy.png';
import '../styles/license.scss';

const NoWrap = p => <span style={{ whiteSpace: 'nowrap' }}>{p.children}</span>;

const LicensePage = () => {
  const currentYear = new Date().getFullYear();
  const copyright = currentYear > 2019 ? `2019-${currentYear}` : '2019';

  return (
    <Layout>
      <Content>
        <SEO
          title="Patents"
          keywords={[
            `lumini`,
            `patent`,
            `license`,
            `satisfy the virtual patent marking provisions of various jurisdictions including the virtual patent marking provisions of the America Invents Act`,
          ]}
        />
        <h1 className="neotech-med title">
          Lumini
          <br /> Corporation
          <br />
          <small>Patents</small>
        </h1>
        <hr className="horizontal-separator" />
        <article
          css={css`
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;
          `}
        >
          <GreaterThanCaret />
          <div className="paragraph">
            <PatentsQuery
              render={data => (
                <>
                  <p className="patent-ids">
                    <b>Protected by U.S. Patents</b>:{' '}
                    {data.allPatentsJson.edges.map(({ node: patent }) => (
                      <ExternalAnchor
                        key={patent.id}
                        title={patent.name}
                        href={patent.href}
                      >
                        {patent.id}
                      </ExternalAnchor>
                    ))}
                  </p>
                  <p>
                    Additional patents may be pending in the U.S. and elsewhere.
                  </p>
                  <p>
                    To find out more about patent licensing, email{' '}
                    <ExternalAnchor href="mailto:nils@adtile.me?subject=Inquiries to Lumini Research">
                      research@lumini.me
                    </ExternalAnchor>
                  </p>
                  <p>
                    This page is provided to satisfy the virtual patent marking
                    provisions of various jurisdictions including the virtual
                    patent marking provisions of the America Invents Act.
                  </p>
                  <p>
                    <strong>Copyright {copyright}. Lumini Corporation.</strong>
                  </p>
                  <img
                    style={{ width: '30%', margin: '0' }}
                    src={fbiAntiPiracyLogo}
                    alt="FBI anti-piracy"
                  />
                  <p>
                    <small>
                      <i>
                        The unauthorized reproduction or distribution of a
                        copyrighted work is illegal. Criminal copyright
                        infringement, including infringement without monetary
                        gain, is investigated by the FBI and is punishable by
                        fines and federal imprisonment.
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
          </div>
        </article>
      </Content>
    </Layout>
  );
};

export default LicensePage;
