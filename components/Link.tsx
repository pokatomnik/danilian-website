import React from 'react';
import styles from './Link.module.css';

export function Link(props: React.PropsWithChildren<object>) {
  return <a className={styles.a}>{props.children}</a>;
}
