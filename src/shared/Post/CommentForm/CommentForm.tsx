import React, {ChangeEvent, FormEvent, useContext, useRef, useState} from 'react';
import styles from './commentform.css';
import {commentContext} from "../../context/commentContext";

export function CommentForm() {
  const {value, onChange} = useContext(commentContext)

  const formRef = useRef<HTMLTextAreaElement>(null)

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log(formRef.current?.value);
  }

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    onChange(event.target.value)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea className={styles.input} value={value} onChange={handleChange}/>
      <button type="submit" className={styles.button}>Комментировать</button>
    </form>
  );
}
