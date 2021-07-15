import React from 'react';
import styles from './Li.module.css';

export function Li(props: React.PropsWithChildren<object>) {
  return <li className={styles.li}>{props.children}</li>;
}
