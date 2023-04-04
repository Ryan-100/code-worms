import React from 'react'
import { useGetAllMoviesQuery } from '@/store/modules/videos/videoModule';
import Movies from '@/components/LV3/Watch/Movies';
import PrivateRoute from '@/service/Auth';

const movies = () => { 

const { data } = useGetAllMoviesQuery();

  return (
    <PrivateRoute>

    <Movies videos={data}/>
    </PrivateRoute>
  )
}

export default movies