import { Login } from '@/components/Login'
import { Link } from 'react-router-dom'

export const LoginPage = () => {
  return (
    <div className='flex items-center justify-center h-[700px]'>
      <div className='h-[300px] flex items-center justify-center flex-col'>
        <div className='flex items-center flex-col space-y-8'>
          <h1 className='text-2xl font-poppins font-bold text-green-800'>Login</h1>
          <Login/>
        </div>
        <p className="text-sm text-gray-500 text-center mt-3">
          or <Link className="text-green-600 hover:underline" to ="/register">register</Link>
        </p>
      </div>
    </div>
  )
}
