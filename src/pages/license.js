import React from 'react';
// import { Link } from 'gatsby';
import { css } from '@emotion/core';

import GreaterThanCaret from '../components/greaterThanCaret';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Content from '../components/content';
import { ExternalAnchor } from '../components/common/anchor';
import { PatentsQuery } from '../queries/PatentsQuery';
import '../styles/license.scss';

const NoWrap = p => <span style={{ whiteSpace: 'nowrap' }}>{p.children}</span>;

const LicensePage = () => (
  <Layout>
    <Content>
      <SEO
        title="License"
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
        <small>License</small>
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
              <p className="patent-ids">
                <b>Protected by U.S. Patents</b>:{' '}
                {data.allPatentsJson.edges.map(({ node: patent }) => (
                  <>
                    <ExternalAnchor
                      key={patent.id}
                      title={patent.name}
                      href={patent.href}
                    >
                      {patent.id}
                    </ExternalAnchor>
                  </>
                ))}
              </p>
            )}
          />
        </div>
      </article>
    </Content>
  </Layout>
);

export default LicensePage;
