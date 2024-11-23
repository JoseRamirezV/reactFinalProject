import PropTypes from 'prop-types';

import { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
// import {  AiOutlineDelete, AiOutlineMoon } from 'react-icons/ai';
import FactForm from './FactForm';

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
      form.reset();
      closeForm();
   };

   return (
      <>
         <nav className='inline-flex sticky top-8 justify-between items-center py-2 px-4 bg-gray-700/50 w-4/5 md:w-2/4 rounded-full z-10 backdrop-blur-sm'>
            <div className='relative inline-flex items-center gap-1 group'>
               <a href='#' className='p-2 hover:bg-gray-50 transition group/logo rounded-full'>
                  <img
                     src='earth.webp'
                     alt=''
                     className='size-5 group-hover/logo:invert transition'
                  />
               </a>
               {/* //TODO: add dark mode toggle function */}
               {/* <button className='relative p-2 rounded-full transition-colors hover:bg-gray-700'>
                  <AiOutlineMoon className='size-5' />
               </button> */}
            </div>
            <ul className='relative flex gap-1 h-full'>
               {/* //TODO: add delete selected feature */}
               {/* <li>
                  <button className='p-2 rounded-full transition-colors duration-300 hover:bg-red-600'>
                     <AiOutlineDelete className='size-5' />
                  </button>
               </li> */}
               <li>
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
