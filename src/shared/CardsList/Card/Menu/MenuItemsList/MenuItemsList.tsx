import React from 'react';
import styles from './menuitemslist.css';
import {Text} from "../../../../Text";
import {Icon} from "../../../../Icon";
import {ICONS} from "../../../../../constants";

interface IMenuItemsListProps {
  postId: string
}

export function MenuItemsList({ postId }: IMenuItemsListProps) {
  return (
    <ul className={styles.menuItemsList}>
      <li className={`${styles.menuItem} ${styles.notMobileListItem}`}>
        <Icon name={ICONS.comment}/>
        <Text size={14}>Комментарии</Text>
      </li>
      <div className={`${styles.divider} ${styles.notMobileListItem}`}></div>
      <li className={`${styles.menuItem} ${styles.notMobileListItem}`}>
        <Icon name={ICONS.share}/>
        <Text size={14}>Поделиться</Text>
      </li>
      <div className={`${styles.divider} ${styles.notMobileListItem}`}></div>
      <li className={styles.menuItem} onClick={() => console.log(postId)}>
        <Icon name={ICONS.block}/>
        <Text size={14}>Скрыть</Text>
      </li>
      <div className={styles.divider}></div>
      <li className={`${styles.menuItem} ${styles.notMobileListItem}`}>
        <Icon name={ICONS.save}/>
        <Text size={14}>Сохранить</Text>
      </li>
      <div className={`${styles.divider} ${styles.notMobileListItem}`}></div>
      <li className={styles.menuItem}>
        <Icon name={ICONS.warning}/>
        <Text size={14}>Пожаловаться</Text>
      </li>
    </ul>
  );
}
