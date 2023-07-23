import React from 'react';
import styles from './menu.css';
import {Dropdown} from "../../../Dropdown";
import {MenuItemsList} from "./MenuItemsList";
import {Text} from "../../../Text";
import {Icon} from "../../../Icon";
import {ICONS} from "../../../../constants";

export function Menu() {
  return (
    <div className={styles.menu}>
      <Dropdown button={
        <button className={styles.menuButton}>
          <Icon name={ICONS.menu} size={31}/>
        </button>
      }
                onClose={() => console.log("close animation fun i presume")}
                onOpen={() => console.log("open animation fun here")}
                isOpen={ false }>
        <div className={styles.dropdown}>
          <MenuItemsList postId='1234'/>
          <button className={styles.closeButton}>
            <Text size={14}>Закрыть</Text>
          </button>
        </div>
      </Dropdown>
    </div>
  );
}
