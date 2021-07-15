import React from 'react';
import styles from './Header.module.css';

export function Header(props: React.PropsWithChildren<object>) {
  return <h1 className={styles.header}>{props.children}</h1>;
}
