"use client";

import { useQuery } from '@tanstack/react-query';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Skeleton } from './ui/skeleton';
import { marked } from 'marked';
import type { Dispatch, SetStateAction } from 'react';

const fetchChangelog = async (): Promise<string> => {
  const res = await fetch('/api/changelog');
  if (!res.ok) {
    throw new Error('Failed to fetch changelog');
  }
  const data = await res.json();
  return data.content;
};

interface ChangelogModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export function ChangelogModal({ isOpen, setIsOpen }: ChangelogModalProps) {
  const { data: markdownContent, isLoading, isError } = useQuery({
    queryKey: ['changelog'],
    queryFn: fetchChangelog,
    enabled: isOpen,
    staleTime: 1000 * 60 * 5,
  });

  const htmlContent = markdownContent ? marked.parse(markdownContent) : '';

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="bg-neutral-900 border-neutral-700 max-w-2xl h-[80vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-green-300 text-2xl">Changelog</DialogTitle>
        </DialogHeader>
        <div 
          className="prose prose-invert max-w-none prose-sm overflow-y-auto pr-4 -mr-6 text-neutral-300 custom-scrollbar flex-1 py-4 prose-axion"
        >
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
