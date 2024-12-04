'use client'

import { useState, ChangeEvent, FormEvent, useEffect } from 'react'
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"
import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert"
import { AlertCircle, FileUp } from 'lucide-react'
import Link from 'next/link'
import { IconArrowBack, IconCheck } from '@tabler/icons-react'
import Gallery from '../Gallery'
import * as api from '../../../app/api'
import { IGallery } from '~/shared/types'
import { Dialog, DialogContent } from '~/components/ui/dialog'
import { useRouter } from 'next/navigation'

export const AdminGallery = () => {
  const [file, setFile] = useState<File | null>(null);
  const [open, setOpen] = useState<Boolean>();
  const [error, setError] = useState<string | null>(null);
  const [images, setImages] = useState<IGallery[]>([{ _id: '', path: '', title: '', type: '' }]);
  const [type, setType] = useState<string>();
  const [title, setTitle] = useState<string>();
  const navigation = useRouter();

  const allowedTypes = ['.jpg', '.jpeg', '.png', '.mp4', '.ogg']

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0]
      const fileExtension = '.' + selectedFile.name.split('.').pop()?.toLowerCase()
      setTitle(selectedFile.name);
      setType(
        fileExtension in ['.mp4', '.ogg'] ? 'video' : 'image'
      );

      if (allowedTypes.includes(fileExtension)) {
        setFile(selectedFile)
        setError(null)
      } else {
        setFile(null)
        setError('Tipo de archivo no permitido. Por favor, selecciona una imagen (.jpg, .jpeg, .png) o un video (.mp4, .ogg).')
      }
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!file) {
      setError('Por favor, selecciona un archivo.')
      return
    }

    const data = new FormData();
    data.append('file', file);
    data.append('title', `${title?.toString()}`);
    data.append('type', `${type?.toString()}`);

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/gallery/create`, {
      method: 'POST',
      body: data,
      credentials: 'include'
    })

    setOpen(true);
    setFile(null)
  }

  useEffect(() => {
    const get = async () => {
      const gallery = await api.getImagesFromGallery() as IGallery[];
      setImages(gallery);
    }
    get();
  }, [])

  return <>
    <section className="flex flex-col justify-center">
      <div className="w-full justify-between">
        <nav className="w-full">
          <ul className="w-full flex justify-between p-10 gap-5 bg-black/10">
            <li><Link href={'/admin/'} title="Volver" className={`flex items-center hover:text-yellow-400`}>{<IconArrowBack />} Volver</Link></li>
            <li><div className='flex gap-2'>
              <Link href={'/admin/events'} title="Administrar eventos" className={`hover:text-yellow-400`}>Administrar eventos</Link>
              <Link href={'/admin/logout'} title="Cerrar sesión" className={`hover:text-yellow-400`}>Cerrar sesión</Link>
            </div></li>
          </ul>
        </nav>
      </div>

      <div className='overflow-y-auto h-96 w-full scale-75'>
        <Gallery mediaItems={images} isAdmin={true} />
      </div>

      <form onSubmit={handleSubmit}  method="POST" className="space-y-6 max-w-md mx-auto p-6 bg-card rounded-lg shadow-md">
        <div>
          <Label htmlFor="file-upload" className="block text-sm font-medium mb-2">
            Selecciona una imagen o video
          </Label>
          <Input
            id="file-upload"
            type="file"
            onChange={handleFileChange}
            accept={allowedTypes.join(',')}
            className="file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
          />
          <input name='title' type='hidden' value={title} />
          <input name='type' type='hidden' value={type} />
        </div>

        {error && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {file && (
          <div className="text-sm text-muted-foreground">
            Archivo seleccionado: {file.name}
          </div>
        )}

        <Button type="submit" className="w-full enabled:bg-yellow-400" disabled={!file}>
          <FileUp className="mr-2 h-4 w-4" /> Subir Archivo
        </Button>
      </form>
      <Dialog open={!!open} onOpenChange={() => {
        setOpen(false);
        navigation.refresh();
        }}>
        <DialogContent className="max-w-80 bg-neutral-100 dark:bg-neutral-900 flex flex-col justify-center items-center">

          <IconCheck className="text-green-500" />
          <h1>Imagen subida a la galería</h1>

        </DialogContent>
      </Dialog>
    </section>
  </>

}
