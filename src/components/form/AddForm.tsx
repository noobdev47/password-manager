import { useState } from 'react'
import { ReactComponent as EyeIcon } from '../../assets/eye.svg'
import { ReactComponent as EyeSlashIcon } from '../../assets/eye-slash.svg'

interface Props {
  account: {
    email: string
    password: string
  }
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const AddForm = ({ account, handleInputChange }: Props) => {
  const [showPass, setShowPass] = useState(false)

  return (
    <>
      <div className='relative mt-1 rounded-md shadow-sm'>
        <label
          htmlFor='email'
          className='block text-sm font-medium text-white'
        >
          Email/Username
        </label>
        <input
          id='email'
          type='email'
          name='email'
          value={account.email}
          onChange={handleInputChange}
          className='block w-full rounded-md border-cyan-800 px-2 focus:border-cyan-600 focus:ring-indigo-500 sm:text-sm mb-3'
        />
      </div>
      <div className='relative mt-1 rounded-md shadow-sm'>
        <label
          htmlFor='password'
          className='block text-sm font-medium text-white'
        >
          Password
        </label>
        <div className='flex flex-row items-center justify-center'>
          <input
            id='password'
            name='password'
            value={account.password}
            onChange={handleInputChange}
            type={showPass ? 'text' : 'password'}
            className='block w-full mr-2 rounded-md border-cyan-800 px-2 focus:border-cyan-600 focus:ring-indigo-500 sm:text-sm'
          />
          <div
            className='cursor-pointer p-2'
            onClick={() => setShowPass(!showPass)}
          >
            {showPass ? <EyeSlashIcon /> : <EyeIcon />}
          </div>
        </div>
      </div>
    </>
  )
}

export default AddForm
