import React from 'react';
import styles from './controls.css';
import {KarmaCounter} from "./KarmaCounter";
import {CommentsButton} from "./CommentsButton";
import {Actions} from "./Actions";

export function Controls(props: { downs: number, ups: number}) {
  return (
      <div className={styles.controls}>
          <KarmaCounter downs={props.downs} ups={props.ups}/>
          <CommentsButton />
          <Actions />
      </div>
  );
}
