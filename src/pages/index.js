import React from 'react';
// import { Link } from 'gatsby';
import { css } from '@emotion/core';

import GreaterThanCaret from '../components/greaterThanCaret';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Content from '../components/content';
import { ExternalAnchor } from '../components/common/anchor';
import { Patents } from '../components/patents';
import '../styles/index.scss';

const NoWrap = p => <span style={{ whiteSpace: 'nowrap' }}>{p.children}</span>;

const ContentSplit = ({ children }) => (
  <article
    css={css`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
    `}
  >
    {children}
  </article>
);

const ContentRight = ({ children }) => (
  <article
    css={css`
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: flex-start;
    `}
  >
    {children}
  </article>
);

const IndexPage = () => (
  <Layout>
    <Content>
      <SEO title="Home" keywords={[`theoretical`, `science`, `research`]} />
      <h1 className="neotech-med title">
        Lumini
        <br /> Corporation
      </h1>
      <hr className="horizontal-separator" />
      <ContentSplit>
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
      </ContentSplit>
      <hr className="horizontal-separator" />
      <ContentRight>
        <div className="paragraph">
          <p>
            <strong>
              Additional patents may be pending in the U.S. and elsewhere.
            </strong>
          </p>
          <p>
            This page is provided to satisfy the virtual patent marking
            provisions of various jurisdictions including the virtual patent
            marking provisions of the America Invents Act.
          </p>
        </div>
      </ContentRight>
      <hr className="horizontal-separator" />
      <ContentRight>
        <div className="paragraph">
          <Patents />
        </div>
      </ContentRight>
    </Content>
  </Layout>
);

export default IndexPage;
