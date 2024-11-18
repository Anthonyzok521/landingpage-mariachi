
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

type MediaItems = {
  mediaItems: IGallery[]
  isAdmin?: Boolean
  isToEvent?: Boolean
}

export default function Gallery({ mediaItems, isAdmin, isToEvent }: MediaItems) {
  const [selectedItem, setSelectedItem] = useState<(IGallery | null)>(null);
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
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/gallery/delete/${image}`, { method: "DELETE" });
    location.href = '/admin/gallery';
  }

  return (
    <>
      <Suspense fallback={<CardEventsSkeleton />}>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mediaItems.map((item, index) => (
            <div
              key={`i-${index}`}
              className={cn(
                `group relative rounded-lg overflow-hidden bg-neutral-200 dark:bg-neutral-800 ${isToEvent && selectedItem?._id == item._id ? 'border-4 shadow-sm border-yellow-400' : ''}`
              )}
            >
              <div className="aspect-square relative">
                <Image
                  src={item.type === "image" ? item.path : "/mci_logo.png"}
                  alt={item.title}
                  fill
                  className={`object-cover transition-transform duration-300 group-hover:scale-105}`}
                  sizes={`${!isAdmin ? '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' : '(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw'}`}
                />
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
                <div className="relative aspect-video">
                  <iframe
                    src={selectedItem?.path}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
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