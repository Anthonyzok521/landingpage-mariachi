"use client";

import { useState, useRef, FormEvent } from "react";
import { Upload, X } from "lucide-react";
import { Button } from "~/components/ui/button";
import { ProgressRing } from "~/components/ui/progress-ring";
import { FilePreview } from "~/components/file-preview";
import { ACCEPTED_FILE_TYPES, formatFileSize } from "~/lib/file-utils";

export function MultimediaUploadForm() {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [title, setTitle] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [open, setOpen] = useState<Boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const acceptedTypes = Object.entries(ACCEPTED_FILE_TYPES)
    .map(([mime, exts]) => [...exts])
    .flat()
    .join(',');

  const handleUpload = async (file: File) => {
    if (!file) return;
    
    const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase();
    const fileType = ['.mp4', '.ogg'].includes(fileExtension) ? 'video' : 'image';

    setSelectedFile(file);
    setTitle(file.name);
    setType(fileType);
    setUploading(true);
    setProgress(0);

    // Simulate upload progress
    const totalSize = file.size;
    let loadedSize = 0;
    const chunkSize = totalSize / 100;

    const updateProgress = () => {
      if (loadedSize < totalSize) {
        loadedSize += chunkSize;
        const currentProgress = (loadedSize / totalSize) * 100;
        setProgress(Math.min(currentProgress, 100));
        setTimeout(updateProgress, 100);
      } else {
        setUploading(false);
      }
    };

    updateProgress();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) handleUpload(file);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const clearSelection = () => {
    setSelectedFile(null);
    setProgress(0);
    setUploading(false);
    if (inputRef.current) inputRef.current.value = '';
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedFile) {
      setError('Por favor, selecciona un archivo.');
      return;
    }

    const data = new FormData();
    data.append('file', selectedFile);
    data.append('title', title);
    data.append('type', type);

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/gallery/create`, {
      method: 'POST',
      body: data,
    });

    setOpen(true);
    setSelectedFile(null);
    setTitle("");
    setType("");
  };

  return (
    <div className="w-full max-w-md mx-auto p-6">
      <form onSubmit={handleSubmit}>
        <div
          className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          {uploading ? (
            <div className="flex flex-col items-center gap-4">
              <ProgressRing progress={progress} />
              <p className="text-sm text-muted-foreground">
                Cargando {selectedFile?.name} ({formatFileSize(selectedFile?.size || 0)})
              </p>
            </div>
          ) : (
            <>
              <input
                ref={inputRef}
                type="file"
                accept={acceptedTypes}
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) handleUpload(file);
                }}
              />
              {selectedFile ? (
                <div className="space-y-4">
                  <div className="relative">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 z-10 bg-background/80 hover:bg-background"
                      onClick={clearSelection}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                    <FilePreview file={selectedFile} className="w-full" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {selectedFile.name} ({formatFileSize(selectedFile.size)})
                  </p>
                </div>
              ) : (
                <>
                  <Upload className="mx-auto h-12 w-12 text-muted-foreground/50" />
                  <h3 className="mt-4 text-lg font-semibold">Cargar archivo</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Arrastra y suelta tu archivo aquí -
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Formatos soportados: JPG, JPEG, PNG, GIF, MP4, OGG
                  </p>
                  <Button
                    onClick={() => inputRef.current?.click()}
                    variant="secondary"
                    className="mt-4"
                  >
                    Seleccionar archivo
                  </Button>
                </>
              )}
            </>
          )}
        </div>
        {selectedFile && (
          <div className="mt-4 space-y-4">
            <Button type="submit" className="w-full">
              Subir archivo
            </Button>
          </div>
        )}
      </form>
    </div>
  );
}