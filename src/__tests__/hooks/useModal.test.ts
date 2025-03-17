/* eslint-env jest */

import { renderHook, act } from '@testing-library/react';

import { useModal } from '@/shared/hooks/useModal';

describe('useModal Hook', () => {
  test('initializes with closed state by default', () => {
    const { result } = renderHook(() => useModal());
    
    expect(result.current.isOpen).toBe(false);
    expect(result.current.data).toBe(null);
  });
  
  test('initializes with provided initial state', () => {
    const { result } = renderHook(() => useModal({ initialState: true }));
    
    expect(result.current.isOpen).toBe(true);
  });
  
  test('open() opens the modal', () => {
    const { result } = renderHook(() => useModal());
    
    act(() => {
      result.current.open();
    });
    
    expect(result.current.isOpen).toBe(true);
  });
  
  test('open() with data sets the data', () => {
    const testData = { id: 1, name: 'Test' };
    const { result } = renderHook(() => useModal<typeof testData>());
    
    act(() => {
      result.current.open(testData);
    });
    
    expect(result.current.isOpen).toBe(true);
    expect(result.current.data).toEqual(testData);
  });
  
  test('close() closes the modal and clears data', () => {
    const testData = { id: 1, name: 'Test' };
    const { result } = renderHook(() => useModal<typeof testData>());
    
    act(() => {
      result.current.open(testData);
    });
    
    expect(result.current.isOpen).toBe(true);
    expect(result.current.data).toEqual(testData);
    
    act(() => {
      result.current.close();
    });
    
    expect(result.current.isOpen).toBe(false);
    expect(result.current.data).toBe(null);
  });
  
  test('toggle() toggles the modal state', () => {
    const { result } = renderHook(() => useModal());
    
    // Initially closed
    expect(result.current.isOpen).toBe(false);
    
    // First toggle - should open
    act(() => {
      result.current.toggle();
    });
    expect(result.current.isOpen).toBe(true);
    
    // Second toggle - should close
    act(() => {
      result.current.toggle();
    });
    expect(result.current.isOpen).toBe(false);
  });
}); 