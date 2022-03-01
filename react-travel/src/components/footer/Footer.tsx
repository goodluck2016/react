import React from 'react';
import styles from './Footer.module.css';
import { useTranslation, withTranslation } from 'react-i18next';

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.footer}>
      {t('footer.detail')}
    </div>
  );
}