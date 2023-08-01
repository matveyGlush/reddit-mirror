import React from 'react';
import styles from './card.css';
import {TextContent} from "./TextContent";
import {Preview} from "./Preview";
import {Menu} from "./Menu";
import {Controls} from "./Controls";

export function Card(props: PostData) {
  return (
      <li className={styles.card}>
          <TextContent title={props.title} author={props.author} created_utc={props.created_utc}/>
          <Preview preview={props.preview}/>
          <Menu />
          <Controls downs={props.downs} ups={props.ups}/>
      </li>
  );
}
