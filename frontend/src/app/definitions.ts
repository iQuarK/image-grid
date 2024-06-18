export interface Photo {
  id: string;
  urls: {
    thumb: string;
    full: string;
  };
  alt_description: string;
}

export interface ResponseAPI {
  data: {
    response: {
      results: Photo[];
      total_pages: number;
    };
  };
}

export type Page = {
  page: number;
  photos: Photo[];
};
