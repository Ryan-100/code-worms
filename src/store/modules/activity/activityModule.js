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
      check_watchlist:builder.query({
        query(entity_ID){
          return            `Check_watchlist.php?entity_ID=${entity_ID}`;
          
        }
      }),
      remove_watchlist:builder.mutation({
        query(entity_ID){
          return {
            url: `Remove_from_Watchlist.php?entity_ID=${entity_ID}`,
            method: "POST",
            body: {},
          }
        }
      }),
     
    }
  }
});

export const {useSubscribeMutation,useAdd_watchlistMutation,useCheck_watchlistQuery,useRemove_watchlistMutation} = ActivitySlice;