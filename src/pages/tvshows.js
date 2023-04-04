import React from "react";
import { useGetAllTVsQuery } from "@/store/modules/videos/videoModule";
import Tvs from "@/components/LV3/Watch/Tvs";
import PrivateRoute from "@/service/Auth";

const tvshows = () => {
  const { data } = useGetAllTVsQuery();
  return (
    <PrivateRoute>
      <Tvs videos={data} />
    </PrivateRoute>
  );
};

export default tvshows;
