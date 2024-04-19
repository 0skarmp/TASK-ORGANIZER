import React from 'react'
import { useEffect } from 'react';

const ModalTask = ({close}) => {
    if(!open ) 
    return null;

    useEffect(() => {
        const handleCloseModal = (event) => {
            if (event.keyCode === 27) { // Cerrar modal al presionar la tecla 'Esc'
                close();
            }
        };

        document.addEventListener("keydown", handleCloseModal);

        return () => {
            document.removeEventListener("keydown", handleCloseModal);
        };
    }, [close]);

    const handleDelete = () => {
        // Lógica para eliminar una tarea
    };

    const handleSave = () => {
        // Lógica para guardar una tarea
    };

    return (
        <div className={`flex  ${open ? 'block' : 'hidden'} z-50 fixed pt-40 bg-slate-600  w-screen h-screen `}>
            <div className='bg-slate-300'>
            <div className=" h-40 w-full rounded-b-xl">
                <h1 className="underline mt-1 left-2">Task Title <button onClick={close} className="right-2 mt-1" >x</button></h1>
                <label htmlFor="">Additional</label>
                <input className="" type="text" placeholder="Description" name="" id="" />
            </div>
            <div>
                <input className="" type="text" placeholder="Additional" id="" name="" />
                <label>Status:</label>
                <input type="checkbox" />Completed
                <input type="checkbox" />In progress
                <input type="checkbox" />Canceled
                <input type="checkbox" />Canceled
                <input type="checkbox" />Review
                <input type="checkbox" />On Hold
            </div>
            <button onClick={handleDelete} className="right-1 bg-green rounded-md px-2">Delete</button>
            <button onClick={handleSave} className="right-6 bg-green rounded-md px-2">Save</button>
            </div>
        </div>
    );
};




//   return (
//     <div className=' z-50'>
//         <button className='text-4xl mt-20 text-red fixed' onClick={close}>CERRAR</button>
//     </div>
//   )


export default ModalTask