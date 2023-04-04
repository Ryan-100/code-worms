import React from 'react'
import ProfileComponent from '@/components/LV3/Profile/Profile'
import PrivateRoute from '@/service/Auth'

const profile = () => {
  return (
    <PrivateRoute>

    <ProfileComponent/>
    </PrivateRoute>
  )
}

export default profile
