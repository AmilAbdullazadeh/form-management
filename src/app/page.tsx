import { Metadata } from 'next';

import { Skeleton } from '@/shared/components/common/Skeleton/Skeleton';

export const metadata: Metadata = {
  title: 'Forms',
  description: 'Manage and organize your forms efficiently. Create, edit, and track form submissions in one place.',
};

export default function HomePage() {
  return (
    <main className="container">
      <div>
        <Skeleton type="title" />
        <Skeleton type="text" size="md" />
        
        <div>
          <Skeleton type="card" count={2} />
        </div>
      </div>
    </main>
  );
} 