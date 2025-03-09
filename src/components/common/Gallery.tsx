"use client";

import { FormEvent, Suspense, useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "../ui/dialog";
import { cn } from "~/lib/utils";
import { Expand, Focus, Play } from "lucide-react";
import { IGallery } from "~/shared/types";
import CTA from "./CTA";
import { IconEraser } from "@tabler/icons-react";
import { useDispatch } from "react-redux";
import { uploadImage } from "~/lib/reducers";
import CardEventsSkeleton from "../widgets/CardsEventsSkeleton";
import ReactPlayer from 'react-player';

type MediaItems = {
  mediaItems: IGallery[]
  isAdmin?: Boolean
  isToEvent?: Boolean
}

export default function Gallery({ mediaItems, isAdmin, isToEvent }: MediaItems) {
  const [selectedItem, setSelectedItem] = useState<(IGallery | null)>(null);
  const [videoThumbnails, setVideoThumbnails] = useState<{ [key: string]: string }>({});
  const dispatch = useDispatch();

  const selected = () => {
    if (selectedItem) {
      dispatch(
        uploadImage(selectedItem.path)
      );
    };
    return <></>;
  }

  const deleteImage = (image?: string) => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/gallery/delete/${image}`);
    location.href = '/admin/gallery';
  }

  const handleVideoReady = (url: string, player: ReactPlayer) => {
    const videoElement = player.getInternalPlayer() as HTMLVideoElement;
    videoElement.currentTime = 0; // Ensure the video is at the start
    videoElement.onloadeddata = () => {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      if (context) {
        canvas.width = videoElement.videoWidth;
        canvas.height = videoElement.videoHeight;
        context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
        const thumbnail = canvas.toDataURL();
        setVideoThumbnails(prev => ({ ...prev, [url]: thumbnail }));
      }
    };
  }

  return (
    <>
      <Suspense fallback={<CardEventsSkeleton />}>
        <div className={`grid grid-cols-2 md:grid-cols-2 ${!isToEvent ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-4`} >
          {mediaItems.map((item, index) => (
            <div
              key={`i-${index}`}
              className={cn(
                `group relative rounded-lg overflow-hidden bg-neutral-200 dark:bg-neutral-800 ${isToEvent && selectedItem?._id == item._id ? 'border-4 shadow-sm border-yellow-400' : ''} ${isAdmin && !isToEvent ? `max-md:w-40 max-md:h-40 ${isToEvent ? '' : 'md:scale-75'}` : ''}`
              )}
            >
              <div className={`aspect-square relative`}>
                {item.type === "image" ? (
                  <Image
                    src={item.path}
                    alt={item.title}
                    fill
                    className={`object-cover transition-transform duration-300 group-hover:scale-105`}
                    sizes={`(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw`}
                  />
                ) : (
                  <Image
                    src={videoThumbnails[item.path] || "/video.svg"}
                    alt={item.title}
                    fill
                    className={`object-cover transition-transform duration-300 group-hover:scale-105`}
                    sizes={`(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw`}
                  />
                )}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedItem(item);
                    }}
                    className="bg-white/90 dark:bg-neutral-900/90 p-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    {item.type === "image" ? (
                      !isToEvent ? <Expand className="w-6 h-6 text-neutral-900 dark:text-white" /> : <Focus />
                    ) : (
                      <Play className="w-6 h-6 text-neutral-900 dark:text-white" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
          {
            !isToEvent ? <DialogContent className="max-w-7xl bg-neutral-100 dark:bg-neutral-900">
              {selectedItem?.type === "image" ? (
                <div className="relative h-[80vh]">
                  <Image
                    src={selectedItem.path}
                    alt={selectedItem.title}
                    fill
                    className="object-contain"
                    sizes="100vw"
                    priority
                  />
                </div>
              ) : (
                <div className="relative max-md:aspect-video md:w-full md:h-96">
                  <ReactPlayer
                    url={selectedItem?.path}
                    playing={false}
                    controls={true}
                    width="100%"
                    height="100%"
                    onReady={(player) => selectedItem?.path && handleVideoReady(selectedItem.path, player)}
                  />
                </div>
              )}
              {isAdmin && <CTA callToAction={{
                text: "Eliminar",
                icon: IconEraser

              }} linkClass="btn bg-red-400" action={true} onClickHandle={() => deleteImage(selectedItem?._id)} />}
            </DialogContent> :
              selected()
          }

        </Dialog>
      </Suspense>
    </>
  );
}