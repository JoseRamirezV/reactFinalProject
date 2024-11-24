import PropTypes from 'prop-types';
import { FaRegTrashCan } from 'react-icons/fa6';
import { LuPencil } from 'react-icons/lu';
import { useState } from 'react';

import FactForm from './FactForm';

export default function Item({ item, deleteFact, updateFact, className }) {
   const [openForm, setOpenForm] = useState(false);
   const closeForm = () => setOpenForm(false);

   const handleSubmit = async (e) => {
      e.preventDefault();
      const form = e.currentTarget;
      const data = Object.fromEntries(new window.FormData(form));

      await updateFact(item._id, { id: item._id, ...data });
      form.reset();
      closeForm();
   };

   return (
      <>
         <div
            className={`${className} relative size-full flex flex-col bg-gray-100 dark:bg-gray-700/50 rounded-2xl shadow-lg p-4 pb-0 group animate-grow`}
         >
            {/* //TODO: add check to delete functionality */}
            {/* <div className='absolute top-3 right-3 scale-0 group-hover:scale-100 transition-transform'>
               <input
                  className='hidden peer'
                  type='checkbox'
                  name='delete'
                  id={`delete_${item._id}`}
               />
               <label
                  htmlFor={`delete_${item._id}`}
                  className='block size-4 rounded-full dark:bg-gray-600 cursor-pointer transition-all peer-checked:dark:bg-blue-500 hover:ring-2 hover:ring-offset-2 hover:ring-offset-blue-600'
               />
            </div> */}
            <header className='text-xl font-bold text-start mb-1 text-gray-700 dark:text-white line-clamp-1 transition-colors'>
               {item.title}
            </header>
            <p className='font-medium text-blue-700 dark:text-orange-200 text-pretty text-start text-sm line-clamp-4 mb-auto transition-colors'>
               {item.fact}
            </p>
            <footer className='relative text-xs text-start my-4 flex-grow-1'>
               <a href='#' className='hover:underline block pt-4 w-fit text-gray-900 dark:text-white transition-colors'>
                  {item.category}
               </a>
               <div className='absolute right-0 bottom-0 flex gap-2 transform scale-0 group-hover:scale-100 origin-right transition-transform'>
                  <button
                     className='rounded-xl p-2 bg-blue-700 dark:bg-amber-500 hover:scale-110 transition-all'
                     onClick={() => setOpenForm(true)}
                  >
                     <LuPencil className='size-4' />
                  </button>
                  <button
                     className='rounded-xl p-2 bg-red-600 hover:scale-110 transition-all'
                     onClick={() => deleteFact(item._id)}
                  >
                     <FaRegTrashCan className='size-4' />
                  </button>
               </div>
            </footer>
         </div>

         <FactForm
            handleSubmit={handleSubmit}
            values={item}
            open={openForm}
            close={closeForm}
         />
      </>
   );
}

Item.propTypes = {
   item: PropTypes.shape({
      _id: PropTypes.string,
      title: PropTypes.string,
      fact: PropTypes.string,
      category: PropTypes.string,
   }).isRequired,
   deleteFact: PropTypes.func,
   updateFact: PropTypes.func,
   className: PropTypes.string,
};
