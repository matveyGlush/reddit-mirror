import React from 'react';
import styles from './dropdown.css';
import ReactDOM from "react-dom";

interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  destination: HTMLDivElement | null;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

const NOOP = () => {};

export function Dropdown({ button, children, destination, isOpen, onClose = NOOP, onOpen = NOOP }: IDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen);
  React.useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);
  React.useEffect(() => isDropdownOpen ? onOpen() : onClose(), [isDropdownOpen]);

  const handleOpen = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  if (!destination) {
    return null
  }

  return ReactDOM.createPortal((
    <div className={styles.container}>
      <div onClick={handleOpen}>
        { button }
      </div>
      { isDropdownOpen && (
        <div className={styles.listContainer}>
          <div className={styles.list} onClick={() => setIsDropdownOpen(false)}>
            { children }
          </div>
        </div>
      )}
    </div>
  ), destination);
}
