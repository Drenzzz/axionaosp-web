import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AboutPageContent } from './AboutPageContent';

const queryClient = new QueryClient();

export function AboutPage() {
  return (
    <QueryClientProvider client={queryClient}>
      <AboutPageContent />
    </QueryClientProvider>
  );
}
