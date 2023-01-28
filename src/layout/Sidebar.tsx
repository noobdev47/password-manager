import { useState } from 'react'
import Add from '../components/modals/AddModal'
import { ReactComponent as AddIcon } from '../assets/add.svg'

const Sidebar = () => {
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(open => !open)
  }
  const handleOpen = () => {
    setOpen(true)
  }

  return (
    <div className='w-20 flex flex-col bg-cyan-800 rounded-r-xl p-1'>
      <div
        onClick={handleOpen}
        className='cursor-pointer w-11/12 rounded-full bg-cyan-900 hover:bg-cyan-700 transition duration-300 ease-in-out'
      >
        <AddIcon />
      </div>
      <Add
        open={open}
        handleClose={handleClose}
      />
    </div>
  )
}

export default Sidebar
