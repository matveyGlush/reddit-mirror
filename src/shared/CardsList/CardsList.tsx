import React, {useContext} from 'react';
import styles from './cardslist.css';
import {Card} from "./Card";
import {postsContext} from "../context/postsContext";
import {Text} from "../Text";

export function CardsList() {
  const posts = useContext(postsContext)
  const listItems = posts ? posts.map(post =>
    <Card
      id={""}
      key={post.data.id}
      author={post.data.author}
      title={post.data.title}
      downs={post.data.downs}
      ups={post.data.ups}
      preview={post.data.preview}
      created_utc={post.data.created_utc}
      postId={post.data.id}
      subreddit={post.data.subreddit}
    />
  ) : <Text size={20}>no posts. error!!!!!!</Text>

  return (
    <ul className={styles.cardsList}>
      { listItems }
    </ul>
  );
}
