import { SignUp } from '@/components/SignUp'

import { Link } from 'react-router-dom'


export const RegisterPage = () => {
  return (
    <div className='flex items-center justify-center h-[700px]'>
      <div className='h-[300px] flex items-center justify-center flex-col'>
        <div className='flex items-center flex-col space-y-8' >
          <h1 className="text-2xl font-poppins font-bold text-green-800" >Flights App</h1>
          <SignUp/>
        </div>
        <p className="text-sm text-gray-500 text-center mt-3">
          Already have an account?{" "}
          <Link to="/login" className="text-green-600 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}
