import React from 'react';

import { SkeletonCard } from '@/shared/components/common/Skeleton/Card/SkeletonCard';

import { SkeletonFormListProps } from './SkeletonFormList.types';

export const SkeletonFormList: React.FC<SkeletonFormListProps> = ({
  count = 9,
  className = '',
  gridClassName = '',
}) => {
  return (
    <div className={className}>
      <div className={gridClassName || 'form-grid'}>
        {Array.from({ length: count }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    </div>
  );
};
