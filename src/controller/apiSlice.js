import { getToken } from "@/service";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { HYDRATE } from "next-redux-wrapper";


const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost/CW_Streaming_Serivce_Backend/",
    prepareHeaders: (headers) => {
      const token = getToken();
      headers.set("Content-Type", "application/x-www-form-urlencoded");
      headers.set("Accept", "application/json");
      headers.set("token", `${token ? token : ""}`);
      headers.set("x-api-token", "cbfb51a2-84b6-4025-a3e2-ed8616edf311");
      headers.set("Authorization", `Bearer ${token ? token : ""}`);
      return headers;
    },
  }),

  endpoints: () => ({}),
});

export default apiSlice;
