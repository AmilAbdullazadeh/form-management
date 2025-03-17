import { SkeletonFormList } from '@/features/FormManagement/ui/Skeleton/SkeletonFormList';

export default function Loading() {
  return (
    <main className="container">
      <div className="header">
        <h1>Form List</h1>
      </div>

      <SkeletonFormList />
    </main>
  );
}
