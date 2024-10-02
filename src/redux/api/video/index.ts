import { api as index } from "..";

const ENDPOINTS = process.env.NEXT_PUBLIC_ENDPOINT;

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getVideo: build.query<VIDEO.GetVideoResponse, VIDEO.GetVideoRequest>({
      query: () => ({
        url: `${ENDPOINTS}/video/`,
        method: "GET",
      }),
      providesTags: ["video"],
    }),
  }),
});

export const { useGetVideoQuery } = api;
