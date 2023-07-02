'use client';

import { useEffect } from "react";

import EmptyState from "@/app/components/EmptyState";

interface ErrorStateProps {
  error: Error
}

export default function ErrorState({ error } : ErrorStateProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return ( 
    <EmptyState
      title="Uh Oh"
      subtitle="Something went wrong!"
    />
   );
}
 
