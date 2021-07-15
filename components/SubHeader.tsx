import React from 'react';
import styles from './SubHeader.module.css';

export function SubHeader(props: React.PropsWithChildren<object>) {
  return <h2 className={styles.h2}>{props.children}</h2>;
}
