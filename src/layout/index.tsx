import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

interface Props {
  children?: React.ReactNode
}

const Layout = (props: Props) => {
  return (
    <div className='w-screen h-screen flex flex-row bg-cyan-700'>
      <Sidebar />
      <div className='w-11/12 p-3 '>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
