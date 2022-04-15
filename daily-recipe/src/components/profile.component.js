import React from 'react'
import { useEffect } from 'react'
import { useSelector} from 'react-redux'

const Profile = () => {
  const user = useSelector((state)=>state.user.value)

  // useEffect(() => {
    
  // },[user]);
 console.log(user)
  return (
    <div>Profile
      <h1>well the current user is {user.name}</h1>
    </div>
    
  )
}

export default Profile