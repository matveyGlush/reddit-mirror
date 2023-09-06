import React from 'react';
import styles from './preview.css';
import UseImageByAI from "../../../../hooks/useImageByAI";
import {IMAGE_DEFAULT} from "../../../../constants";

export function Preview({ title }: { title: string }) {
  const img = UseImageByAI(title);
  return (
      <div className={styles.preview}>
        <img className={styles.previewImg}
            src={img}
            alt="main card picture, wait to load"
        />
      </div>
  );
}
