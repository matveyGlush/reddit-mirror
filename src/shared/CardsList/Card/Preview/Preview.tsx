import React, {useState} from 'react';
import styles from './preview.css';
import {IMAGE_DEFAULT} from "../../../../constants";

const defaultPreview: Preview = {
  images: [{
    source: {
      url: IMAGE_DEFAULT,
    }
  }]
}



export function Preview({ preview = defaultPreview }: {preview: Preview | undefined}) {
  const [imgUrl, setImgUrl] = useState(preview.images[0].source.url)
  return (
      <div className={styles.preview}>
        <img className={styles.previewImg}
            src={imgUrl}
            alt="main card picture"
             onError={(event) => setImgUrl(IMAGE_DEFAULT)}
        />
      </div>
  );
}
