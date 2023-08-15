import React from 'react';
import styles from './userblock.css';
import {Icon} from "../../../Icon";
import {COLORS, ICONS} from "../../../../constants";
import {Text} from "../../../Text";

interface IUserBlockProps {
  avatarSrc?: string,
  username?: string,
}

export function UserBlock({ avatarSrc, username }: IUserBlockProps) {
  return (
    <a
      href={`https://www.reddit.com/api/v1/authorize?client_id=5SmZApmvGnNN2Q2tAgzV0Q&response_type=code&state=random_string&redirect_uri=${process.env.DOMEN}auth&duration=permanent&scope=read submit identity`}
      className={styles.userBox}>
      <div className={styles.avatarBox}>
        {avatarSrc
        ? <img src={avatarSrc} alt="user avatar" className={styles.avatarImage}/>
        : <Icon name={ICONS.anon} size={50}/>}
      </div>

      <div className={styles.username}>
        <Text size={20} color={username ? COLORS.black : COLORS.grey99}>{username || "Аноним"}</Text>
      </div>
    </a>
  );
}
