import { useContext, useState, useEffect } from "react";
import plus from "../../assets/images/plus.png";
import ModalFolder from "../Modals/ModalFolder";
import logo from "../../assets/images/yoshi-removebg-preview.png";
import { contexto } from "../../Contexto";

const List = () => {
  const { addFolder, setAddFolder } = useContext(contexto);
  const [folder, setFolder] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  //Abrir Modal
  const setshowModal = () => {
    setOpenModal(true);
  };

  //Cerrar Modal
  const closeModal = () => {
    setOpenModal(false);
  };

  const handleAddFolder = () => {
    // Datos por defecto
    const defaultFolder = {
      name: addFolder.nameCategory.trim() || "Default Title",
      color: addFolder.color.trim() || "bg-222ab",
    };

    // Agregar los datos del contexto al estado local folder para su renderizado
    setFolder((prev) => [...prev, defaultFolder]);
    [{name, color},{name, color},{name,color}]

    // Limpiar los datos del contexto después de renderizar
    setAddFolder({
      nameCategory: "",
      color: "",
    });
  };

  return (
    <>
      <div className="flex w-screen h-screen fixed bg-gray-200">
        <div className="bg-red100 flex items-center justify-center fixed w-full h-24 font-bold">
          <img className="w-14 h-18 left-8 fixed" src={logo} alt="" />
          <h1 className="flex left-40 fixeds text-white text-5xl ">
            Task Organizer
          </h1>
        </div>
        <div className="pt-5 mt-24 h-full w-full flex">
          {/* Agregar dinamicamente los folders */}
          {folder.map((fol, i) => {
            return (
              <div key={i} className={`${fol.color} h-auto`}>
                {fol.name}
                <div>
                  <button>add task</button>
                </div>
              </div>
            );
          })}
          <button
            onClick={setshowModal}
            className="h-12 mx-5 bg-stone-700 flex items-center text-white text-2xl font-bold rounded-lg hover:bg-slate-400 p-1 pr-7"
          >
            <img className="mx-2 fill-white" src={plus} alt=" plus" />
            Add Folder
          </button>
        </div>
      </div>
      {openModal && <ModalFolder closeModal={closeModal} handleAddFolder={handleAddFolder}/>}
    </>
  );
};

export default List;
