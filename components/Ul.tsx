import React from 'react';
import styles from './Ul.module.css';

export function Ul(props: React.PropsWithChildren<object>) {
  return <ul className={styles.ul}>{props.children}</ul>;
}
