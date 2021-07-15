import React from 'react';
import styles from './PageWrapper.module.css';

export function PageWrapper(props: React.PropsWithChildren<object>) {
  return <div className={styles.pageWrapper}>{props.children}</div>;
}
