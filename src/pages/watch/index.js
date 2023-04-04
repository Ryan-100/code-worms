import React from 'react'
import Main from '@/components/LV3/Watch/Main'
import PrivateRoute from '@/service/Auth'

const index = () => {
  return (
    <PrivateRoute>

      <Main/>
    </PrivateRoute>
  )
}

export default index
