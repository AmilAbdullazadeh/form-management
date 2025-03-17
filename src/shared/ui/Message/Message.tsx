import React from 'react';

import { Warning } from '@/resources/assets/icons/Warning';
import { Status } from '@/shared/types/status';

import styles from './Message.module.scss';
import { MessageProps } from './Message.types';


export const Message: React.FC<MessageProps> = ({ message, type }) => {
  if (!message) return null;
  
  return (
    <div className={styles.container} role="alert">
      { (type === Status.ERROR || type === Status.WARNING) && <Warning /> }
      <span className={styles.text}>{message}</span>
    </div>
  );
}; 