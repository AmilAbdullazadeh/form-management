import { InputHTMLAttributes } from 'react';

import { ElementConfig } from '@/shared/types/base';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & Partial<ElementConfig>;
