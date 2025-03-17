/* eslint-env jest */

import { classNames } from '@/shared/utils/classNames';

describe('classNames utility', () => {
  test('handles empty arguments', () => {
    expect(classNames()).toBe('');
  });

  test('combines string class names', () => {
    expect(classNames('btn', 'btn-primary')).toBe('btn btn-primary');
  });

  test('filters out falsy values', () => {
    expect(classNames('btn', null, undefined, false, 'btn-primary')).toBe('btn btn-primary');
  });

  test('handles object conditions', () => {
    expect(classNames(
      'btn',
      { 'btn-primary': true, 'btn-disabled': false }
    )).toBe('btn btn-primary');
  });

  test('handles complex combination of types', () => {
    expect(classNames(
      'form-control',
      { 
        'is-invalid': true, 
        'is-valid': false 
      },
      null,
      undefined,
      'mb-3'
    )).toBe('form-control is-invalid mb-3');
  });
}); 