import { useState } from 'react'
import plus from '../../assets/images/plus.png'
import ModalFolder from '../Modals/ModalFolder'

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
      <div className='flex bg-222 w-screen h-screen fixed '>
        <button onClick={setshowModal} className="bg-black40 flex items-center text-white text-2xl absolute px-8 h-14 ml-5 font-bold rounded-lg top-4 hover:bg-slate-400 ">
          <img className='mx-2 fill-white' src={plus} alt=" plus" />
          Add Folder
        </button>
      </div>
      {openModal && <ModalFolder closeModal={closeModal} />}
    </>
    
  )
}

export default List