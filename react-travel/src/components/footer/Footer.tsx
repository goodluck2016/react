import React from 'react';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      版权所有 @React 驴子网
    </div>
  );
}