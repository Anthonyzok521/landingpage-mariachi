'use client'

import { useState, ChangeEvent, FormEvent, useEffect } from 'react'
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"
import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert"
import { AlertCircle, FileUp } from 'lucide-react'
import Link from 'next/link'
import { IconArrowBack } from '@tabler/icons-react'
import Gallery from '../Gallery'
import * as api from '../../../app/api'
import { IGallery } from '~/shared/types'

export const AdminGallery = () => {
  const [file, setFile] = useState<File | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [images, setImages] = useState<IGallery[]>([{ path: '', title: '', type: '' }]);

  const allowedTypes = ['.jpg', '.jpeg', '.png', '.mp4', '.ogg']

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0]
      const fileExtension = '.' + selectedFile.name.split('.').pop()?.toLowerCase()

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

    // Aquí iría la lógica para enviar el archivo al servidor
    console.log('Archivo listo para ser enviado:', file)

    // Simulamos una carga exitosa
    alert('Archivo cargado con éxito!')
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
      <Gallery mediaItems={images} isAdmin={true}/>
    </div>

      <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto p-6 bg-card rounded-lg shadow-md">
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
    </section>
  </>

}
