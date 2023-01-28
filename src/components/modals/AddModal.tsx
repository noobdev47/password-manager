import AddForm from '../form/AddForm'
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

interface Prop {
  open: boolean
  handleClose: () => void
}

const AddModal = ({ open, handleClose }: Prop) => {
  const [account, setAccount] = useState({ email: '', password: '' })

  const cancelButtonRef = useRef(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setAccount({ ...account, [name]: value })
  }

  return (
    <Transition.Root
      show={open}
      as={Fragment}
    >
      <Dialog
        as='div'
        onClose={handleClose}
        className='relative z-10'
        initialFocus={cancelButtonRef}
      >
        <Transition.Child
          as={Fragment}
          leaveTo='opacity-0'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leaveFrom='opacity-100'
          leave='ease-in duration-200'
          enter='ease-out duration-300'
        >
          <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
        </Transition.Child>

        <div className='fixed inset-0 z-10 overflow-y-auto'>
          <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
            <Transition.Child
              as={Fragment}
              leave='ease-in duration-200'
              enter='ease-out duration-300'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>
                <div className='bg-cyan-800 px-4 pt-4 pb-4 sm:p-6 sm:pb-4'>
                  <div className='sm:flex sm:items-start'>
                    <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full'>
                      <Dialog.Title
                        as='h3'
                        className='text-lg font-medium leading-6 text-white mb-4'
                      >
                        Add New Credential
                      </Dialog.Title>
                      <div className='mt-2'>
                        <AddForm
                          account={account}
                          handleInputChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='bg-cyan-800 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6'>
                  <button
                    type='button'
                    className=' transition duration-300 ease-in-out inline-flex w-full justify-center rounded-md border border-transparent bg-emerald-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm'
                    // onClick={() => setOpen(false)}
                  >
                    Add
                  </button>
                  <button
                    type='button'
                    onClick={handleClose}
                    ref={cancelButtonRef}
                    className='mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm'
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default AddModal
