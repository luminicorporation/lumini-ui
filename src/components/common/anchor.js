import React from 'react';
import cx from 'classnames';

import '../../styles/anchor.scss';

export const Anchor = ({ children, className, ...props }) => (
  <a className={cx('anchor', className)} {...props}>
    {children}
  </a>
);

export const ExternalAnchor = ({ children, className, ...props }) => (
  <Anchor
    className={cx('anchor anchor--external', className)}
    {...props}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
    {/* TODO: add icon for external link when on hover */}
  </Anchor>
);
