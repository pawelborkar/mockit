/*
@Author: Pawel Borkar,
Date: 15 January 2023
*/
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Content, Navbar, Footer } from './components';

// Create a client
const queryClient = new QueryClient();

export function App() {
  return (
    // Wrapping react query client around App
    <QueryClientProvider client={queryClient}>
      {/* React Query Devtools is for development purpose only */}
      <ReactQueryDevtools initialIsOpen={false} />
      <Navbar />
      <Content />
      <Footer />
    </QueryClientProvider>
  );
}
