'use client';

import { useState, useCallback } from 'react';

export interface UseModalOptions {
  initialState?: boolean;
}

export function useModal<T = any>({ initialState = false }: UseModalOptions = {}) {
  const [isOpen, setIsOpen] = useState(initialState);
  const [data, setData] = useState<T | null>(null);

  const open = useCallback((modalData?: T) => {
    setIsOpen(true);
    if (modalData !== undefined) {
      setData(modalData);
    }
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    setData(null);
  }, []);

  const toggle = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  return {
    isOpen,
    data,
    open,
    close,
    toggle,
    setData,
  };
}
