import React from 'react';
import styles from './metadata.css';
import {UserLink} from "./UserLink";
import {parseDateUTC} from "../../../../../utils/react/parseDateUTC";


export function MetaData( { created_utc, author }: { created_utc: number, author: string}) {
  return (
      <div className={styles.metaData}>
        <UserLink author={author}/>
        <span className={styles.createdAt}>
            <span className={styles.publishedLabel}>Опубликовано </span>
          {parseDateUTC(created_utc)}
        </span>
      </div>
  );
}
