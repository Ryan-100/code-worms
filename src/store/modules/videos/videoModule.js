import apiSlice from "@/controller/apiSlice";

export const VideoSlice = apiSlice.injectEndpoints({
  endpoints(builder) {
    return {
      getEntities: builder.query({
        query() {
          return "Get_entities.php";
        },
      }),
      getAllMovies: builder.query({
        query() {
          return "Get_allmovies.php";
        },
      }),
      getAllTVs: builder.query({
        query() {
          return "GET_alltvshows.php";
        },
      }),
      getWatchlists: builder.query({
        query() {
          return "GET_watchlist.php";
        },
      }),
      getLatest: builder.query({
        query() {
          return "latest_movie.php";
        },
      }),
      getRecently: builder.query({
        query() {
          return "recently_add.php";
        },
      }),
      getVideoInfo: builder.query({
        query(id) {
          return `GET_VideoInfo.php?id=${id}`;
        },
      }),
      searchMovies:builder.query({
          query(query) {
          return `GET_Search.php?query=${query}`;
        },
      }),
    };
  },
});

export const {
useGetAllMoviesQuery,useGetAllTVsQuery,useGetWatchlistsQuery,useGetEntitiesQuery,useGetLatestQuery,useGetRecentlyQuery,useGetVideoInfoQuery,useSearchMoviesQuery
} = VideoSlice;
