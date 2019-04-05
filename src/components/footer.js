import React, { useState } from 'react';
import { css } from '@emotion/core';

import Content from './content';
import { useResizeEvent } from '../hooks/useResizeEvent';
import { List, Item } from './common/horizontalList';
import { Anchor } from './common/anchor';
import '../styles/footer.scss';

const fixedStyles = css`
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const Footer = () => {
  const [isFixed, setIsFixed] = useState(null);
  const hideFooter = isFixed === null;

  useResizeEvent(() => {
    if (typeof document !== 'undefined') {
      setIsFixed(
        document.documentElement.clientHeight > document.body.clientHeight
      );
    }
  });

  return (
    <footer
      className="footer"
      style={{ display: hideFooter ? 'none' : 'block' }}
      css={isFixed === true ? fixedStyles : null}
    >
      <Content
        css={css`
          padding: 0;
        `}
      >
        <article>
          <List>
            <Item>© {new Date().getFullYear()} Lumini Corporation Inc.</Item>
            <Item className="hide-on-mobile">California, United States.</Item>
            <Item>
              <Anchor href="mailto:nils@adtile.me?subject=Inquiries to Lumini Research">
                research@lumini.me
              </Anchor>
            </Item>
          </List>
        </article>
      </Content>
    </footer>
  );
};

export default Footer;
