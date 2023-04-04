import apiSlice from "@/controller/apiSlice";

export const ActivitySlice = apiSlice.injectEndpoints({
  endpoints(builder){
    return {
      subscribe:builder.mutation({
        query(){
          return {
            url: `subscription.php`,
            method: "POST",
            body: {},
          }
        }
      }),
      add_watchlist:builder.mutation({
        query(movie){
          return {
            url: `ADD_to_Watchlist.php?entity_ID=${movie.entity_ID}`,
            method: "POST",
            body: JSON.stringify(movie),
          }
        }
      }),
      check_watchlist:builder.mutation({
        query(movie){
          return {
            url: `Check_watchlist.php`,
            method: "POST",
            body: JSON.stringify(movie),
          }
        }
      }),
      remove_watchlist:builder.mutation({
        query(movie){
          return {
            url: `Remove_from_Watchlist.php`,
            method: "POST",
            body: JSON.stringify(movie),
          }
        }
      }),
     
    }
  }
});

export const {useSubscribeMutation,useAdd_watchlistMutation,useCheck_watchlistMutation,useRemove_watchlistMutation} = ActivitySlice;