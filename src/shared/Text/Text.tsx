import React from 'react';
import styles from './text.css';
import classNames from 'classnames';
import {COLOR, COLORS} from "../../constants";

type TSizes = 28 | 20 | 16 | 14 | 12 | 10;

interface ITextProps {
  As?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div';
  children?: React.ReactNode;
  size: TSizes;
  mobileSize?: TSizes;
  tabletSize?: TSizes;
  desktopSize?: TSizes;
  color?: COLOR;
  bold?: boolean;
}

export function Text(props: ITextProps) {
  const { As = 'span',
    color = COLORS.black,
    bold = false,
    children,
    size,
    mobileSize,
    tabletSize,
    desktopSize,
  } = props;
  const classes = classNames(
    styles[`s${size}`],
    styles[color],
    { [styles.bold]: bold },
    { [styles[`m${mobileSize}`]]: mobileSize },
    { [styles[`m${tabletSize}`]]: tabletSize },
    { [styles[`m${desktopSize}`]]: desktopSize },
  );
  return (
    <As className={classes}>
      {children}
    </As>
  );
}
