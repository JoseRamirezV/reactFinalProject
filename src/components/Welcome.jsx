import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

export default function Welcome() {
   const [openDialog, setOpenDialog] = useState(() => {
      const welcomed = window.localStorage.getItem('welcomed');
      return !welcomed;
   });

   const closeModal = () => {
      setOpenDialog(false);
      window.localStorage.setItem('welcomed', true);
   };
   return (
      <dialog
         open={openDialog}
         className='fixed size-full top-0 pt-28 bg-black/20 z-20'
      >
         <div className='relative flex flex-col gap-2 py-8 px-10 mx-auto w-80 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-lg z-10 animate-spawn'>
            <header>
               <h2 className='font-semibold text-left text-2xl text-gray-800'>
                  Bienvenido
               </h2>
               <button
                  className='absolute -top-2 -right-2 p-2 rounded-full bg-gray-100 transition-colors hover:bg-red-500 hover:text-white'
                  onClick={closeModal}
               >
                  <AiOutlineClose className='size-5' />
               </button>
            </header>
            <p className='text-pretty text-left'>
               La Tierra tiene mucho que contar. ¡Descubre y guarda sus secretos
               aquí!
            </p>
         </div>
      </dialog>
   );
}
