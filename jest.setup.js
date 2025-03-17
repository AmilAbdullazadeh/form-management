import '@testing-library/jest-dom';

// Mock for the next/router
jest.mock('next/router', () => ({
  useRouter: jest.fn().mockImplementation(() => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
    back: jest.fn(),
    pathname: '/',
    query: {},
    asPath: '/',
    events: {
      on: jest.fn(),
      off: jest.fn()
    }
  }))
})); 