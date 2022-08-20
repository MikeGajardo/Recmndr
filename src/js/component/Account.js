import React from 'react'
import useAuth from '../../Context/useAuth'

export default function Account({code}) {
    const accessToken = useAuth(code)
  return (
    <div>{code}</div>
  )
}

