namespace NEWS {
  interface INews {
    id: number;
    author: string;
    image: string;
    content: string;
    content_ky: string;
    content_ru: string;
    created_at: string;
    updated_at: string;
  }
  type GetNewsResponse = INews[];
  type GetNewsRequest = void;
}
