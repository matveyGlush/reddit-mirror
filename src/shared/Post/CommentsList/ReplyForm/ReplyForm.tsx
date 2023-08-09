import React, {useEffect, useRef, useState} from 'react';
import styles from './replyform.css';

export function ReplyForm({ name }: { name: string }){
  const [inputValue, setInputValue] = useState(`${name}, `);
  const [isReplyFormOpened, setIsReplyFormOpened] = useState(false);

  const inputReference = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (!inputReference.current) return;
    inputReference.current.focus();
    inputReference.current.value = inputValue;
  }, [isReplyFormOpened]);

  function handleOpenReplyForm(event: React.MouseEvent<HTMLButtonElement>) {
    event.stopPropagation();
    setIsReplyFormOpened(true);
  }

  function handleSubmitReplyForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsReplyFormOpened(false);
  }

  return (
    <>
      { isReplyFormOpened
        ? <form onSubmit={(event) => handleSubmitReplyForm(event)}>
            <input onChange={(event) => setInputValue(event.target.value)} ref={inputReference} type="text"/>
            <button type={"submit"} className={styles.replyBtn}>Отправить</button>
          </form>
        : <button onClick={(event) => {handleOpenReplyForm(event)}} className={styles.replyBtn}>Ответить</button>
      }
    </>
  );
}
