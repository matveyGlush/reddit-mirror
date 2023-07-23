import React from 'react';
import styles from './icon.css';
import {ICON} from "../../constants";

interface IIconProps {
  name: ICON,
  size?: number,
}

export function Icon({ name, size=14 }: IIconProps) {
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      {name}
    </svg>
  );
}
