import React from 'react';
import styles from './Link.module.css';

interface ILinkProps {
  rel?: string;
  href?: string;
  target?: string;
  onClick?: (evt: React.MouseEvent<HTMLAnchorElement>) => void;
}

export function Link(props: React.PropsWithChildren<ILinkProps>) {
  return <a className={styles.a} {...props} />;
}
