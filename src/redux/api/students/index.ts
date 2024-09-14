import { api as index } from "..";

const ENDPOINTS = process.env.NEXT_PUBLIC_ENDPOINT;

const api = index.injectEndpoints({
    endpoints: (build) => ({
        getStudents: build.query<
            STUDENTS.GetStudentsResponse,
            STUDENTS.GetStudentsRequest
        >({
            query: () => ({
                url: `${ENDPOINTS}/students/`,
                method: "GET",
            }),
            providesTags: ["students"],
        }),
        getStudentsClass: build.query<
            STUDENTS.GetStudentsResponse,
            STUDENTS.GetStudentsRequest
        >({
            query: (id) => ({
                url: `${ENDPOINTS}/students/studentclass${id}`,
                method: "GET",
            }),
        }),
    }),
});

export const { useGetStudentsQuery } = api;
