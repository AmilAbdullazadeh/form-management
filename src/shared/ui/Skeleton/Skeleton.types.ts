import { CSSProperties } from "react";

export type SkeletonType = 'text' | 'title' | 'card' | 'circle' | 'custom';

export type SkeletonSize = 'sm' | 'md' | 'lg' | 'full';

export interface SkeletonProps {
  type?: SkeletonType;
  size?: SkeletonSize;
  width?: string | number;
  height?: string | number;
  className?: string;
  style?: CSSProperties;
  count?: number;
}