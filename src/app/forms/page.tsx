import { Metadata } from 'next';
import React from 'react';

import { FormManagement } from '@/features/FormManagement/FormManagement';

export const metadata: Metadata = {
  title: 'Forms',
  description:
    'Manage and organize your forms efficiently. Create, edit, and track form submissions in one place.',
};

export default function FormsPage() {
  return (
    <main className="container">
      <FormManagement />
    </main>
  );
}
