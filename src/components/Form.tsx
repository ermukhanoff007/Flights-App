import React, { useState } from 'react'

interface FromProps{
  title: string,
  handleClick : (email: string ,password : string)=> void
}

export const Form : React.FC <FromProps> = ({title,handleClick}) => {
  const [email,setEmail] = useState<string>('')
  const [password,setPassword] = useState<string>("")
  return (
    <div className='flex flex-col space-x-6 space-y-6'>
        <div className="flex items-center w-full rounded-lg bg-gray-100 px-4 py-2 focus-within:ring-2 focus-within:ring-green-500 transition">
          <svg
            className="text-gray-400 mr-3"
            width="20"
            height="20"
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
          >
            <rect x="8" y="12" width="48" height="40" />
            <polyline points="56 20 32 36 8 20" />
          </svg>
          <input
            className="w-full bg-transparent outline-none text-base placeholder:text-gray-400 text-black"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </div>
        <div className="flex  w-full items-center rounded-lg bg-gray-100 px-4 py-2 focus-within:ring-2 focus-within:ring-green-500 transition">
          <svg
            className="text-gray-400 mr-3"
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 0 24 24"
            width="20"
            fill="currentColor"
          >
            <path d="M12 2a5 5 0 0 0-5 5v3H5v14h14V10h-2V7a5 5 0 0 0-5-5Zm-3 8V7a3 3 0 0 1 6 0v3H9Zm3 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
          </svg>
          <input
            className="w-full bg-transparent outline-none text-base placeholder:text-gray-400 text-black"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>
        <button
          className="w-full py-3 rounded-lg bg-green-600 text-white font-medium text-base hover:bg-green-500 transition shadow-sm"
          onClick={() => handleClick(email, password)}
        >
          {title}
        </button>
    </div>
  )
}
