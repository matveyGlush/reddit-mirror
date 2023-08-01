import React from 'react';
import styles from './textcontent.css';
import {MetaData} from "./MetaData";
import {Title} from "./Title";

interface ITextContentProps {
  title: string,
  author: string,
  created_utc: number,
}

export function TextContent({ title, author, created_utc }: ITextContentProps) {
  return (
      <div className={styles.textContent}>
          <MetaData author={author} created_utc={created_utc} />
          <Title title={title} />
      </div>
  );
}
