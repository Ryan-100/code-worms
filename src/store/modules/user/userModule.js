import apiSlice from "@/controller/apiSlice";

export const UserSlice = apiSlice.injectEndpoints({
  endpoints(builder) {
    return {
      getUserDetails: builder.query({
        query() {
          return `GET_userinfo.php`;
        },
      }),
    };
  },
});

export const { useGetUserDetailsQuery } = UserSlice;
