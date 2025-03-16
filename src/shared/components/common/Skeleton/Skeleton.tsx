import React from 'react';

import styles from './Skeleton.module.scss';
import { SkeletonProps } from './Skeleton.types';

export const Skeleton: React.FC<SkeletonProps> = ({
  type = 'text',
  size = 'full',
  width,
  height,
  className = '',
  style = {},
  count = 1,
}) => {
  // Generate the appropriate CSS class based on type and size
  const getClassName = () => {
    let baseClass = styles.skeleton;

    if (type === 'custom') {
      return baseClass;
    }

    if (type === 'text' && size !== 'full') {
      return `${baseClass} ${styles['skeleton-text']} ${styles[`skeleton-text-${size}`]}`;
    }

    return `${baseClass} ${styles[`skeleton-${type}`]}`;
  };

  // Generate custom styles for the custom type
  const getStyles = () => {
    const customStyles: React.CSSProperties = { ...style };

    if (type === 'custom') {
      if (width) customStyles.width = width;
      if (height) customStyles.height = height;
    }

    return customStyles;
  };

  // Render multiple skeletons if count > 1
  if (count > 1) {
    return (
      <>
        {Array.from({ length: count }).map((_, index) => (
          <div key={index} className={`${getClassName()} ${className}`} style={getStyles()} />
        ))}
      </>
    );
  }

  // Render a single skeleton
  return <div className={`${getClassName()} ${className}`} style={getStyles()} />;
};
