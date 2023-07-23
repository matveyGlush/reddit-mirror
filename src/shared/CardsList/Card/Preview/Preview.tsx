import React from 'react';
import styles from './preview.css';

export function Preview() {
  return (
      <div className={styles.preview}>
        <img className={styles.previewImg}
            src="https://cdn.dribbble.com/userupload/4693931/file/original-cd1b6b898dca6b75ef03bc726c626256.png?compress=1&resize=752x"
            alt="main card picture ?"
        />
      </div>
  );
}
