"use client";

interface ClientOnlyProps {
    children: React.ReactNode;
}

import { useEffect, useState } from "react"

export default function ClientOnly({children}: ClientOnlyProps) {

  const [hasMounted, setHasMounted] = useState(false);

  useEffect(()=>{
    setHasMounted(true);
  }, []);

  if (!hasMounted){
    return null;
  }

  return (
    <>
        {children}
    </>
  )
}
