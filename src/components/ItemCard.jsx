import PropTypes from 'prop-types';
import { FaRegTrashCan } from 'react-icons/fa6';
import { LuPencil } from 'react-icons/lu';
import FactForm from './FactForm';
import { useState } from 'react';

export default function Item({ item, deleteFact, updateFact }) {
   const [openForm, setOpenForm] = useState(false);
   const closeForm = () => setOpenForm(false);

   const handleSubmit = (e) => {
      e.preventDefault();
      const form = e.currentTarget;
      const data = Object.fromEntries(new window.FormData(form));

      updateFact(item._id, { id: item._id, ...data });
      form.reset();
      closeForm();
   };

   return (
      <>
         <div className='relative size-full flex flex-col bg-gray-700/50 rounded-2xl shadow-lg p-4 pb-0 group'>
            <div className='absolute top-3 right-3 scale-0 group-hover:scale-100 transition-transform'>
               <input
                  className='hidden peer'
                  type='checkbox'
                  name='delete'
                  id={`delete_${item._id}`}
               />
               <label
                  htmlFor={`delete_${item._id}`}
                  className='block size-4 rounded-full bg-gray-600 cursor-pointer transition-all peer-checked:bg-blue-500 hover:ring-2 hover:ring-offset-2 hover:ring-offset-blue-600'
               />
            </div>
            <header className='text-xl font-bold text-start mb-1 line-clamp-1'>
               {item.title}
            </header>
            <p className='text-orange-200 text-pretty text-start text-sm line-clamp-4 mb-auto'>
               {item.fact}
            </p>
            <footer className='relative text-xs text-start my-4 flex-grow-1'>
               <a href='#' className='hover:underline block pt-4'>
                  {item.category}
               </a>
               <div className='absolute right-0 bottom-0 flex gap-2 transform scale-0 group-hover:scale-100 origin-right transition-transform'>
                  <button
                     className='rounded-xl p-2 bg-amber-500 hover:scale-110 transition-all'
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
   }),
   deleteFact: PropTypes.func,
   updateFact: PropTypes.func,
};
