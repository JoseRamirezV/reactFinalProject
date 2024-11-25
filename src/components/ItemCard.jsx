import PropTypes from 'prop-types';
import { FaRegTrashCan } from 'react-icons/fa6';
import { LuPencil } from 'react-icons/lu';
import { lazy, Suspense, useState } from 'react';

import Loading from './icons/Loading';

const FactForm = lazy(() => import('./FactForm'));

const actionButton =
   'rounded-xl p-2 transition-all outline-none hover:scale-110 focus:scale-110 focus:ring';

export default function Item({ item, deleteFact, updateFact, className }) {
   const [openForm, setOpenForm] = useState(false);
   const closeForm = () => setOpenForm(false);

   const handleSubmit = async (data) => {
      // eslint-disable-next-line no-unused-vars
      const { _id, userEmail, ...fact } = item;

      if (JSON.stringify(data) !== JSON.stringify(fact))
         await updateFact(item._id, { id: item._id, ...data });
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
               <a
                  href='#'
                  className='hover:underline block pt-4 w-fit text-gray-900 dark:text-white transition-colors focus:underline outline-none'
               >
                  {item.category}
               </a>
               <div className='absolute right-0 bottom-0 flex gap-2 transform scale-0 group-hover:scale-100 origin-right transition-transform focus-within:scale-100'>
                  <button
                     className={`${actionButton} bg-blue-700 dark:bg-amber-500 dark:focus:ring-amber-300`}
                     onClick={() => setOpenForm(true)}
                  >
                     <LuPencil className='size-4' />
                  </button>
                  <button
                     className={`${actionButton} bg-red-600 focus:ring-red-300`}
                     onClick={() => deleteFact(item._id)}
                  >
                     <FaRegTrashCan className='size-4' />
                  </button>
               </div>
            </footer>
         </div>
         {openForm && (
            <Suspense
               fallback={
                  <Loading className='fixed grid place-content-center size-full inset-0 bg-black/10 z-10 [&>*]:size-10' />
               }
            >
               <FactForm
                  handleSubmit={handleSubmit}
                  values={item}
                  open={openForm}
                  close={closeForm}
               />
            </Suspense>
         )}
      </>
   );
}

Item.propTypes = {
   item: PropTypes.shape({
      _id: PropTypes.string,
      userEmail: PropTypes.string,
      title: PropTypes.string,
      fact: PropTypes.string,
      category: PropTypes.string,
   }).isRequired,
   deleteFact: PropTypes.func,
   updateFact: PropTypes.func,
   className: PropTypes.string,
};
