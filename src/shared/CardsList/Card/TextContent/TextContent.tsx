import React from 'react';
import styles from './textcontent.css';
import {MetaData} from "./MetaData";
import {Title} from "./Title";

interface ITextContentProps {
  title: string,
  author: string,
  created_utc: number,
  subreddit: string,
  postId: string,
}

export function TextContent({ title, author, created_utc, subreddit, postId }: ITextContentProps) {
  return (
      <div className={styles.textContent}>
          <MetaData author={author} created_utc={created_utc} />
          <Title title={title} subreddit={subreddit} postId={postId} />
      </div>
  );
}
