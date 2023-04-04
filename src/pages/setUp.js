import React from 'react'
import SettingUp from '@/components/LV3/Auth/SettingUp'
import PrivateRoute from '@/service/Auth'

const SetUp = () => {
  return (
    <PrivateRoute>

    <SettingUp/>
    </PrivateRoute>
  )
}

export default SetUp
