"use client";
import React, { Suspense, useCallback, useEffect, useState } from "react";
import { Page, Photo, ResponseAPI } from "../definitions";
import PhotoItem from "./photo-item";

type PaginationProps = {};

export default function Pagination({}: PaginationProps) {
  const [currentPhotoId, setCurrentPhotoId] = useState<string | undefined>(
    undefined
  );
  const [pages, setPages] = useState<Page[]>([]);
  const [currentPage, setCurrentPage] = useState<Page | undefined>(undefined);
  const [totalPages, setTotalPages] = useState<number>(0);

  const getPage = useCallback(
    (nextPageNumber = 1): Promise<Page> => {
      return new Promise((resolve, reject) => {
        const page: Page = pages[nextPageNumber];
        if (page !== undefined) {
          setCurrentPage(page);
          resolve(page);
        } else {
          fetch(`http://localhost:3000/api/photos?pageNumber=${nextPageNumber}`)
            .then((response) => response.json())
            .then((dataJson: ResponseAPI) => {
              const page = {
                page: nextPageNumber,
                photos: dataJson.data.response.results,
              };
              const newPages = [...pages];
              newPages[nextPageNumber] = page;
              setPages(newPages);
              setTotalPages(dataJson.data.response.total_pages);
              setCurrentPage(page);
              resolve(page);
            })
            .catch((reason) => reject(reason));
        }
      });
    },
    [pages]
  );

  useEffect(() => {
    getPage();
  }, [getPage]);

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {currentPage?.photos.map((photo: Photo) => (
          <PhotoItem
            key={photo.id}
            photo={photo}
            currentPhotoId={currentPhotoId}
            setCurrentPhotoId={setCurrentPhotoId}
          />
        ))}
      </div>
      <div className="w-96flex flex-row space-x-4">
        <button
          className="p-4 disabled:opacity-75"
          onClick={() =>
            getPage(currentPage?.page ? Math.max(currentPage.page - 1, 1) : 1)
          }
          disabled={!currentPage?.page || currentPage?.page <= 1}
        >
          Previous page
        </button>
        <button
          className="p-4 disabled:opacity-75"
          onClick={() => getPage(currentPage?.page ? currentPage.page + 1 : 1)}
          disabled={!!currentPage?.page && currentPage?.page >= totalPages}
        >
          Next page
        </button>
      </div>
    </>
  );
}
