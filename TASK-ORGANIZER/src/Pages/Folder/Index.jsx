import { useContext, useState,  useEffect} from "react";
import plus from "../../assets/images/plus.png";
import ModalFolder from "../Modals/ModalFolder";
import logo from "../../assets/images/yoshi-removebg-preview.png";
import { contexto } from "../../Contexto";
import  ModalTask  from "../Modals/ModalTask";

const List = () => {
  const { addFolder, setAddFolder } = useContext(contexto);
  const [folder, setFolder] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [openTask, setOpenTask] = useState(false)

  //Abrir Modal
  const setshowModal = () => {
    setOpenModal(true);
  };

  //Cerrar Modal
  const closeModal = () => {
    setOpenModal(false);
  };

  //abrir Modal Task
  const modalOpenTask = () =>{
    setOpenTask(true);
    console.log("modal abierto:",openTask)
  };

  //cerrrar Modal Task
  const  modalCloseTask = () =>{
    setOpenTask(false);
    console.log("Modal cerrado:",openTask)
  };

  
  const handleAddFolder = () => {
    // Datos por defecto
    const defaultFolder = {
      name: addFolder.nameCategory.trim() || "Default Title",
      color: addFolder.color.trim() || "bg-222ab",
    };

    // Agregar los datos del contexto al estado local folder para su renderizado
    setFolder((prev) => [...prev, defaultFolder]);
    

    // Limpiar los datos del contexto después de renderizar
    setAddFolder({
      nameCategory: "",
      color: "",
    });
  };

  return (
    <>
      <div className="flex w-screen h-screen fixed bg-gray-200 items-start">
        <div className="bg-red100 flex items-center justify-center fixed w-full h-24 font-bold">
          <img className="w-14 h-18 left-8 fixed" src={logo} alt="" />
          <h1 className="flex left-40 fixeds text-white text-5xl ">
            Task Organizer
          </h1>
        </div>
        <div className="flex flex-wrap items-start pt-5 mt-24 h-auto w-auto   ">
          {/* Agregar dinamicamente los folders */}
          {folder.map((fol, i) => {
            return (
              <div  key={i} className={`${fol.color} m-2 text-center mx-2 rounded-lg  pt-2 w-80  max-w-52 overflow-hidden break-words` }>
                <span className="block border-b ">{fol.name}</span>
                <div className="flex  justify-center pt-2">
                  <button  onClick={modalOpenTask} className="px-2  text-center mx-4 "> <span className="font-bold text-lg">+</span> add task
                  </button>
                </div>
              </div>
            );
          })}
          <button
            onClick={setshowModal}
            className="h-12 m-5 bg-stone-700 flex items-center text-white text-2xl font-bold rounded-lg hover:bg-slate-400 p-1 pr-7"
          >
            <img className="mx-2 fill-white" src={plus} alt=" plus" />
            Add Folder
          </button>
        </div>
      </div>
      {openModal && <ModalFolder closeModal={closeModal} handleAddFolder={handleAddFolder}/>}
      {openTask && <ModalTask close={modalCloseTask}/>}
    </>
  );
};

export default List;
