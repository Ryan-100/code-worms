import { createSlice } from '@reduxjs/toolkit';

const videoSlice = createSlice({
  name: 'videos',
  initialState: {
    entities: null,
    all_movies:null,
    all_tvshows:null,
    latest_movies:null,
    recently_added:null,
    video_info:null,
  },
  reducers: {
    setEntities: (state, action) => {
      state.entities = action.payload;
    },
    setAllMovies: (state, action) => {
      state.all_movies = action.payload;
    },
    setAllTVshows: (state, action) => {
      state.all_tvshows = action.payload;
    },
    setLatest: (state, action) => {
      state.latest_movies = action.payload;
    },
    setRecently: (state, action) => {
      state.recently_added = action.payload;
    },
    setVideoInfo: (state, action) => {
      state.video_info = action.payload;
    },
  },
});

export const { setEntities,setAllMovies,setAllTVshows,setLatest,setRecently,setVideoInfo } = videoSlice.actions;
export default videoSlice.reducer;
