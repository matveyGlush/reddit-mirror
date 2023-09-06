import React from 'react';
import styles from './card.css';
import {TextContent} from "./TextContent";
import {Preview} from "./Preview";
import {Menu} from "./Menu";
import {Controls} from "./Controls";
import {PostData} from "../../../store/posts/reducer";

export function Card({ data }: PostData) {
  return (
      <li className={styles.card}>
          <TextContent
            title={data.title}
            author={data.author}
            created_utc={data.created_utc}
            postId={data.id}
            subreddit={data.subreddit}
          />
          <Preview title={data.title}/>
          <Menu />
          <Controls downs={data.downs} ups={data.ups}/>
      </li>
  );
}
