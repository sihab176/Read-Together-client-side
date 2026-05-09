import React from 'react'
import useAuth from './useAuth'

const useUserRole = () => {
    const { user, loader } = useAuth()
    
  return (
    <div>useUserRole</div>
  )
}

export default useUserRole