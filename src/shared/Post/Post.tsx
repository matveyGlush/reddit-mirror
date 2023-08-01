import React, {useEffect, useRef} from 'react';
import styles from './post.css';
import ReactDOM from "react-dom";
import {CommentForm} from "./CommentForm";

interface IPostProps {
  onClose: () => void,
  height?: number,
}

export function Post(props: IPostProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (event.target instanceof Node && !ref.current?.contains(event.target)) {
        props.onClose?.();
      }
    }

    document.addEventListener('click', handleClick)

    return () => document.removeEventListener('click', handleClick)
  }, []);

  const node = document.querySelector('#modal_root');
  if (!node) return null;

  return ReactDOM.createPortal((
    <div className={styles.modal} style={{ top: props.height }} ref={ref}>
      <h2></h2>
      <div className={styles.content}>
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
      </div>
      <CommentForm/>
    </div>
  ), node);
}
