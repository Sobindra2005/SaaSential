"use client";
import { QueryClient, QueryClientProvider, } from '@tanstack/react-query'
import { SessionProvider } from "next-auth/react";
import { AuthProvider } from "@/context/AuthContext";


export function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient()
  return (
    <SessionProvider>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </AuthProvider>
    </SessionProvider>
  );
} 