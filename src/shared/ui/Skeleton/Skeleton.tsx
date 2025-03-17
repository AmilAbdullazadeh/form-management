import React from 'react';

import { classNames } from '@/shared/utils/classNames';

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
  const skeletonClass = classNames(
    styles.skeleton,
    type !== 'custom' && styles[`skeleton-${type}`],
    type === 'text' && size !== 'full' && styles[`skeleton-text-${size}`],
    className
  );

  if (count > 1) {
    return (
      <>
        {Array.from({ length: count }).map((_, index) => (
          <div key={index} className={skeletonClass} />
        ))}
      </>
    );
  }

  return <div className={skeletonClass} />;
};
