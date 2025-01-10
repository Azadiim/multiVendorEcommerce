import {SignUp} from '@clerk/nextjs'
import React from 'react'

const SignUpPage = () => {
  return (
    <div className='h-screen w-full grid place-items-center'>
      <SignUp/>
    </div>
  )
}

export default SignUpPage