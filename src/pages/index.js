import React from 'react';
// import { Link } from 'gatsby';
import { css } from '@emotion/core';

import GreaterThanCaret from '../components/greaterThanCaret';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Content from '../components/content';
import '../styles/index.scss';
import { ExternalAnchor } from '../components/common/anchor';

const NoWrap = p => <span style={{ whiteSpace: 'nowrap' }}>{p.children}</span>;

const IndexPage = () => (
  <Layout>
    <Content>
      <SEO title="Home" keywords={[`theoretical`, `science`, `research`]} />
      <h1 className="neotech-med title">
        Lumini
        <br /> Corporation
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
          <p>
            <strong>Lumini Research</strong>
          </p>
          <p>
            Theoretical science research for advanced computing. We are
            developing foundational technologies, applying new thinking for{' '}
            <NoWrap>near-future</NoWrap> applications.
          </p>
          <p>
            Advancing key research areas: Mobile computing, Camera computing,
            Mobile sensors, Artificial intelligence, Cloud automation, Machine
            learning, Neural networks, and more.
          </p>
          <p>
            Learn more about Lumini Research:{' '}
            <ExternalAnchor href="mailto:nils@adtile.me?subject=Inquiries to Lumini Research">
              research@lumini.me
            </ExternalAnchor>
            .
          </p>
          <p>A Nils Forsblom Research Company.</p>
        </div>
      </article>
    </Content>
  </Layout>
);

export default IndexPage;
