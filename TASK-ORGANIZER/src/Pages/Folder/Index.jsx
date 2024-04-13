import { useState } from 'react'
import plus from '../../assets/images/plus.png'
import ModalFolder from '../Modals/ModalFolder'
import logo from '../../assets/images/yoshi-removebg-preview.png'

const List = () => {
  const [openModal, setOpenModal] = useState(false);

  const setshowModal = () => {
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      
      <div className='flex w-screen h-screen fixed bg-slate-200'>
      <div className='bg-red100 flex items-center justify-center fixed w-full h-24 font-bold'>
        <img className='w-14 h-18 left-8 fixed' src={logo} alt="" />
        <h1 className='flex left-40 fixed text-white text-5xl '>
          Task Organizer
        </h1>

      </div>
        <button  onClick={setshowModal} className="bg-stone-700 flex items-center mt-28 text-white text-2xl absolute px-8 h-14 ml-5 font-bold rounded-lg top-4 hover:bg-slate-400 ">
          <img className='mx-2 fill-white' src={plus} alt=" plus" />
          Add Folder
        </button>
        {openModal && <ModalFolder closeModal={closeModal} />}
      </div>

    </>

  )
}

export default List