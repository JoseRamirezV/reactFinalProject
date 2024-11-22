import PropTypes from 'prop-types';

import { AiOutlineDelete, AiOutlineMoon, AiOutlinePlus } from 'react-icons/ai';
import { IoLogOutOutline } from 'react-icons/io5';
import '@/css/Header.css';
import FactForm from './FactForm';
import { useState } from 'react';

export default function Header({ addFact }) {
   const [openForm, setOpenForm] = useState(false);
   const closeForm = () => setOpenForm(false);

   const handleSubmit = (e) => {
      e.preventDefault();
      const form = e.currentTarget;
      const id = crypto.randomUUID();
      const data = Object.fromEntries(new window.FormData(form));

      if (data.category === '') return;

      addFact({ id, ...data });
      form.reset()
      closeForm();
   };

   return (
      <>
         <nav className='inline-flex justify-between items-center p-2 bg-gray-700/50 w-4/5 md:w-2/4 rounded-full'>
            <div className='relative inline-flex gap-2 p-2 group z-10'>
               <img src='vite.svg' alt='' className='size-5 rounded-full' />
               <div className='absolute top-full rounded-md bg-gray-800 p-2 scale-0 group-hover:scale-100 transition-transform origin-top-left'>
                  <ul>
                     <li>
                        <button className='menu-btn'>
                           <AiOutlineMoon className='size-4' />
                           <p className='text-sm'>Modo oscuro</p>
                        </button>
                     </li>
                     <li>
                        <button className='menu-btn'>
                           <IoLogOutOutline className='size-4' />
                           <p className='text-sm'>Cerrar sesión</p>
                        </button>
                     </li>
                  </ul>
               </div>
            </div>
            <ul className='relative flex gap-2 h-full'>
               <li className='absolute right-[120%]'>
                  <button className='p-2 rounded-full transition-colors duration-300 hover:bg-red-600'>
                     <AiOutlineDelete className='size-5' />
                  </button>
               </li>
               <li className='contents'>
                  <button
                     className='p-2 rounded-full transition-colors duration-300 hover:bg-blue-600'
                     onClick={() => setOpenForm(true)}
                  >
                     <AiOutlinePlus className='size-5' />
                  </button>
               </li>
            </ul>
         </nav>
         <FactForm
            handleSubmit={handleSubmit}
            open={openForm}
            close={closeForm}
         />
      </>
   );
}

Header.propTypes = {
   addFact: PropTypes.func,
};
