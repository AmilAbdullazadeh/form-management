import { CSSProperties } from 'react';

import { Size } from '@/shared/models/types/base';


export type SkeletonType = 'text' | 'title' | 'card' | 'circle' | 'custom';

export interface SkeletonProps {
  type?: SkeletonType;
  size?: Size;
  width?: string | number;
  height?: string | number;
  className?: string;
  style?: CSSProperties;
  count?: number;
}
