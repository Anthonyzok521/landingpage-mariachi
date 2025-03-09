"use client";

import { useEffect, useState } from "react";
import { isImageFile, isVideoFile } from "~/lib/file-utils";
import Image from "next/image";

interface FilePreviewProps {
  file: File;
  className?: string;
}

export function FilePreview({ file, className }: FilePreviewProps) {
  const [preview, setPreview] = useState<string>("");

  useEffect(() => {
    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);

  if (isImageFile(file.type)) {
    return (
      <div className={`relative aspect-video rounded-lg overflow-hidden bg-muted ${className}`}>
        <Image
          src={preview}
          alt={file.name}
          fill
          sizes="(max-width: 768px) 100vw, 500px"
          priority
          className="object-contain"
        />
      </div>
    );
  }

  if (isVideoFile(file.type)) {
    return (
      <video
        src={preview}
        className={`w-full rounded-lg ${className}`}
        controls
        preload="metadata"
      />
    );
  }

  return null;
}