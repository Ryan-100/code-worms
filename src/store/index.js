import { configureStore } from "@reduxjs/toolkit";
import { AuthSlice } from "./modules/auth/authModule";
import counterReducer from "./modules/counter/counter-slice";
import { UserSlice } from "./modules/user/userModule";
import userReducer from "./modules/user/user-slice";
import videoReducer from "./modules/videos/video-slice";
import { VideoSlice } from "./modules/videos/videoModule";
import { ActivitySlice } from "./modules/activity/activityModule";

export default configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    videos:videoReducer,
    [AuthSlice.reducerPath]:AuthSlice.reducer,
    [UserSlice.reducerPath]:UserSlice.reducer,
    [VideoSlice.reducerPath]:VideoSlice.reducer,
    [ActivitySlice.reducerPath]:ActivitySlice.reducer,
    
  },
  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat([
      AuthSlice.middleware,
      UserSlice.middleware,
      VideoSlice.middleware,
      ActivitySlice.middleware,
    ]);
  },
});

// export const wrapper = createWrapper(store, { debug: true });
