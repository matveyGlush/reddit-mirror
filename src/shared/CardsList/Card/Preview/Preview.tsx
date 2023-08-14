import React from 'react';
import styles from './preview.css';
import UseImageByAI from "../../../../hooks/useImageByAI";
import {IMAGE_DEFAULT} from "../../../../constants";

export function Preview() {
  // const img = UseImageByAI("Vladimir Putin's ruble is now worth less than a penny");
  return (
      <div className={styles.preview}>
        <img className={styles.previewImg}
            src={IMAGE_DEFAULT}
            alt="main card picture, wait to load"
        />
      </div>
  );
}
