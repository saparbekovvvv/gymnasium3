namespace GALLERY {
  interface IGallery {
    image: string;
    content: string;
  }
  type GetGalleryResponse = IGallery[];
  type GetGalleryRequest = void;
}
