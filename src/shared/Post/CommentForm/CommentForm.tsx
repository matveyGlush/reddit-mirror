import React, {ChangeEvent, FormEvent, useRef} from 'react';
import styles from './commentform.css';
import {useDispatch, useSelector} from "react-redux";
import {RootState, updateComment} from "../../../store/reducer";

export function CommentForm() {
  const value = useSelector<RootState, string>(state => state.comment);
  const dispatch = useDispatch();

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    dispatch(updateComment(event.target.value))
  }

  const formRef = useRef<HTMLTextAreaElement>(null)
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log(formRef.current?.value);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea className={styles.input} value={value} onChange={handleChange}/>
      <button type="submit" className={styles.button}>Комментировать</button>
    </form>
  );
}
