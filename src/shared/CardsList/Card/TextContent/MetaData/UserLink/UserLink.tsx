import React from 'react';
import styles from './userlink.css';

export function UserLink( {author}: {author: string}) {
  return (
      <div className={styles.userLink}>
          <img className={styles.avatar} src="https://cdn.dribbble.com/userupload/3834119/file/original-c0d5ef7c1e3be81ae4797d2193a357ca.png?compress=1&resize=752x" alt="avatar"/>
          <a href="#user-url" className={styles.username}>{author}</a>
      </div>
  );
}
