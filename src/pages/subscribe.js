import React from 'react'
import AboutUs from '@/components/LV3/AboutUs/AboutUs'
import PrivateRoute from '@/service/Auth'

const Subscribe = () => {
  return (
    <PrivateRoute>

    <AboutUs/>
    </PrivateRoute>
  )
}

export default Subscribe
