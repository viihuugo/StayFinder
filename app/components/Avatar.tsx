"use client";

import Image from "next/image";

interface AvatarProps {
  src?: string | null | undefined;
}

export default function Avatar({src} : AvatarProps) {
  return (
    <Image 
      src={ src || "/images/placeholder.jpg"} 
      alt="avatar" 
      height={30} 
      width={30} 
      className="rounded-full"
    />
  )
}
