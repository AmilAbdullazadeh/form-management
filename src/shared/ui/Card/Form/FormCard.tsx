import React from 'react';

import styles from './FormCard.module.scss';
import { FormCardProps } from './FormCard.types';

export const FormCard: React.FC<FormCardProps> = ({
  title,
  subtitle,
  badge,
  children,
  footer,
  className = '',
  metadata = [],
  actions,
}) => {
  const isHidden = className.includes('hidden');

  return (
    <div className={`${styles.formCard} ${className}`}>
      <div className={`${styles.header} ${isHidden ? styles.hidden : ''}`}>
        <div>
          <h3 className={styles.title}>{title.length > 20 ? title.slice(0, 20) + '...' : title}</h3>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}

          {metadata.length > 0 && (
            <div className={styles.meta}>
              {metadata.map((item, index) => (
                <div key={index} className={styles.metaItem}>
                  {item.icon && <span className={styles.icon}>{item.icon}</span>}
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className={styles.badgeContainer}>
          {badge?.map((item, index) => (
            <span key={index} className={`${styles.badge} ${styles[item.variant]}`}>
              {item.text}
            </span>
          ))}
        </div>
      </div>

      {children && <div className={styles.body}>{children}</div>}

      {actions && <div className={styles.body + ' ' + styles.actions}>{actions}</div>}

      {footer && <div className={styles.footer}>{footer}</div>}
    </div>
  );
};
