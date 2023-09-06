import React from 'react';
import styles from './userblock.css';
import {Icon} from "../../../Icon";
import {COLORS, ICONS} from "../../../../constants";
import {Text} from "../../../Text";

interface IUserBlockProps {
  avatarSrc?: string,
  username?: string,
  loading?: boolean,
}

export function UserBlock({ avatarSrc, username, loading }: IUserBlockProps) {
  return (
    <a
      href="https://www.reddit.com/api/v1/authorize?client_id=5SmZApmvGnNN2Q2tAgzV0Q&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity"
      className={styles.userBox}>
      <div className={styles.avatarBox}>
        {avatarSrc
        ? <img src={avatarSrc} alt="user avatar" className={styles.avatarImage}/>
        : <Icon name={ICONS.anon} size={50}/>}
      </div>

      <div className={styles.username}>
        {loading ? (
          <Text size={20} color={username ? COLORS.black : COLORS.grey99}>{"Загрузка..."}</Text>
        ) : (
          <Text size={20} color={COLORS.grey99}>{username || "Аноним"}</Text>
        )}
      </div>
    </a>
  );
}
