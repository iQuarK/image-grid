"use client";
import React, { Suspense } from "react";
import Image from "next/image";
import { Photo } from "../definitions";
import classNames from "classnames";

type PhotoProps = {
    photo: Photo;
    currentPhotoId: string | undefined;
    setCurrentPhotoId: (value: string | undefined) => void
};

export default function PhotoItem({photo, currentPhotoId, setCurrentPhotoId}: PhotoProps) {
  return (
    <Suspense
      fallback={
        <div className="font-bold text-black dark:text-white">Loading...</div>
      }
    >
      <div className="thumb-wrapper" key={photo.id}>
        <Image
          src={photo.urls.full}
          width={200}
          height={200}
          priority
          style={{
            objectFit: currentPhotoId === photo.id ? "contain" : "cover",
          }}
          alt={photo.alt_description}
          className={classNames("thumb", {
            clicked: currentPhotoId === photo.id,
            darker: currentPhotoId !== undefined && currentPhotoId !== photo.id,
          })}
          onClick={() =>
            photo.id !== currentPhotoId
              ? setCurrentPhotoId(photo.id)
              : setCurrentPhotoId(undefined)
          }
        />
      </div>
    </Suspense>
  );
}
