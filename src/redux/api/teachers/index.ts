import { api as index } from "..";

const ENDPOINTS = process.env.NEXT_PUBLIC_ENDPOINT;

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getTeachers: build.query<
      TEACHERS.GetTeachersResponse,
      TEACHERS.GetTeachersRequest
    >({
      query: () => ({
        url: `${ENDPOINTS}/teachers/`,
        method: "GET",
      }),
      providesTags: ["teachers"],
    }),
    postTeacher: build.mutation<TEACHERS.ITeacher, TEACHERS.ITeacher>({
      query: (data) => ({
        url: `${ENDPOINTS}/teachers/`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["teachers"],
    }),
  }),
});

export const { useGetTeachersQuery, usePostTeacherMutation } = api;
