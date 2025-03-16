'use client';

import React from 'react';

import '@/shared/styles/global.scss';
import { Warning } from '@/resources/assets/icons/Warning';
import { Button } from '@/shared/components/common/Button/Button';
import { BUTTON_TEXT } from '@/resources/constants/button';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <main className="container">
      <div className="error-container">
        <div className="error-icon">
          <Warning className='w-1 h-1' />
        </div>
        <h2 className="error-title">Something went wrong</h2>
        <p className="error-message">We encountered an error while loading the forms.</p>
        <div className="error-details">
          <p><strong>Error:</strong> {error.message}</p>
          {error.digest && <p><strong>Digest:</strong> {error.digest}</p>}
        </div>
        <div className="error-actions">
          <Button
            variant="primary"
            onClick={() => reset()}
          >
            {BUTTON_TEXT.TRY_AGAIN}
          </Button>
          <Button
            variant="outline"
            onClick={() => window.location.href = '/forms'}
          >
            {BUTTON_TEXT.GO_TO_FORMS}
          </Button>
        </div>
      </div>
    </main>
  );
} 