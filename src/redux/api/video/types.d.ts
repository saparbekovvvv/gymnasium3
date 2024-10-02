namespace VIDEO {
  interface IVideo {
    id: number;
    title: string;
    link: string;
    description: string;
  }
  type GetVideoResponse = IVideo[];
  type GetVideoRequest = void;
}
