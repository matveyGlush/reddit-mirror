import React, {useState} from 'react';
import styles from './title.css';
import {Post} from "../../../../Post";
import {offset} from "../../../../../utils/react/offset";

type ITitleState = {
  isModalOpen: boolean,
  target: HTMLElement,
}

export function Title({ title }: {title: string}) {
  const [isModalOpened, setIsModalOpened] = useState<ITitleState>({isModalOpen: false, target: document.body});
  return (
      <h2 className={styles.title}>
        <a id="card-title" href="#post-url" className={styles.postLink} onClick={ (event) => setIsModalOpened({isModalOpen: true, target: event.target as HTMLElement}) }>
          {title}
        </a>

        {isModalOpened.isModalOpen && (
          <Post onClose={() => setIsModalOpened({isModalOpen: false, target: document.body} )} height={offset(isModalOpened.target).top - 50}/>
        )}
      </h2>
  );
}
