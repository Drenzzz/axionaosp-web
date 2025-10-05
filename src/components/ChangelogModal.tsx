import { useQuery } from '@tanstack/react-query';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Skeleton } from './ui/skeleton';
import { marked } from 'marked';
import type { Dispatch, SetStateAction } from 'react';

const fetchChangelog = async (): Promise<{ content: string }> => {
  const res = await fetch('http://localhost:3001/api/changelog');
  if (!res.ok) {
    throw new Error('Failed to fetch changelog');
  }
  return res.json();
};

interface ChangelogModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export function ChangelogModal({ isOpen, setIsOpen }: ChangelogModalProps) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['changelog'],
    queryFn: fetchChangelog,
    enabled: isOpen,
    staleTime: 1000 * 60 * 5,
  });

  const htmlContent = data?.content ? marked.parse(data.content) : '';

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="bg-neutral-900 border-neutral-700 max-w-2xl h-[80vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-green-300">Changelog</DialogTitle>
        </DialogHeader>
        <div className="prose prose-invert prose-sm overflow-y-auto pr-4 -mr-6 text-neutral-300">
          {isLoading && <Skeleton className="h-full w-full bg-neutral-800" />}
          {isError && <p className="text-red-500">Failed to load changelog.</p>}
          {htmlContent && (
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
