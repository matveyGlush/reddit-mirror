import React, {useEffect, useRef, useState} from 'react';
import styles from './menu.css';
import {Dropdown} from "../../../Dropdown";
import {MenuItemsList} from "./MenuItemsList";
import {Text} from "../../../Text";
import {Icon} from "../../../Icon";
import {ICONS} from "../../../../constants";

export function Menu() {
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [isDropdown, setIsDropdown] = useState(false)
  useEffect(() => {setIsDropdown(true)}, [dropdownRef])

  return (
    <>
      <div className={styles.menu} ref={dropdownRef} ></div>
      {isDropdown && <Dropdown
          button={<button className={styles.menuButton}><Icon name={ICONS.menu} size={31}/></button>}
          destination={dropdownRef.current}
          onClose={() => {}}
          onOpen={() => {}}
          isOpen={false}>
        <div className="dropdown">
          <MenuItemsList postId='1234'/>
          <button className="closeButton">
            <Text size={14}>Закрыть</Text>
          </button>
        </div>
      </Dropdown>}
    </>
  );
}
