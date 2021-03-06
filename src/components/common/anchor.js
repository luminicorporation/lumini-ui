import React from 'react';
import cx from 'classnames';
import { isNil } from 'lodash';

import '../../styles/anchor.scss';

export const Anchor = ({ children, className, ...props }) => (
  <a className={cx('anchor', className)} {...props}>
    {children}
  </a>
);

export const ExternalAnchor = ({ children, className, target, ...props }) => (
  <Anchor
    className={cx('anchor anchor--external', className)}
    target={isNil(target) ? '_blank' : target}
    rel="noopener noreferrer"
    {...props}
  >
    {children}
    {/* TODO: add icon for external link when on hover */}
  </Anchor>
);
