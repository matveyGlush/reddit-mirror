import React from 'react';
import styles from './cardslist.css';
import {Card} from "./Card";
import {Text} from "../Text";
import {usePostsData} from "../../hooks/usePostsData";

export function CardsList() {
  const { posts } = usePostsData();
  let listItems = <Text size={20}>there will be no posts until authorization.</Text>;

  // @ts-ignore
  if (posts.length === undefined && Object.entries(posts).length > 0 && Object.entries(posts)[0][0] !== 'error') {
    // @ts-ignore
    listItems = Object.entries(posts)[0][1].map(post =>
      <Card
        key={post.data.id}
        data={post.data}
      />
    )
  }


  return (
    <ul className={styles.cardsList}>
      { listItems }
    </ul>
  );
}
