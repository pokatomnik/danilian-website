import React from 'react';
import styles from './Text.module.css';

export function Text(props: React.PropsWithChildren<object>) {
  return <p className={styles.text}>{props.children}</p>;
}
