import PropTypes from 'prop-types';

import { setThemePreference } from '@/utils/setThemePreference';
import { lazy, Suspense, useState } from 'react';
import { AiOutlineMoon, AiOutlinePlus, AiOutlineSun } from 'react-icons/ai';
import {
   MdFormatListBulleted,
   MdOutlineAutoAwesomeMosaic,
} from 'react-icons/md';
import Loading from './icons/Loading';

const FactForm = lazy(() => import('./FactForm'));

export default function Header({ showAsList, addFact, toggleViewMode }) {
   const [openForm, setOpenForm] = useState(false);
   const closeForm = () => setOpenForm(false);

   const handleSubmit = async (data) => {
      const id = crypto.randomUUID();

      if (data.category === '') return;

      await addFact({ id, ...data });
      closeForm();
   };

   const toggleDarkMode = () => {
      const darkMode = window.localStorage.getItem('dark-mode') === 'true';
      setThemePreference(!darkMode);
   };

   return (
      <>
         <nav className='inline-flex sticky top-8 justify-between items-center py-2 px-4 bg-gray-100/50 shadow dark:dark:bg-gray-700/50 w-4/5 md:w-2/4 rounded-full z-10 backdrop-blur-sm'>
            <div className='relative inline-flex items-center gap-1 group'>
               {/* //TODO: add dark mode toggle function */}
               <button
                  className='p-2 rounded-full text-slate-600 dark:text-white hover:scale-110 transition-all'
                  onClick={toggleDarkMode}
               >
                  <span className='relative flex justify-center items-center size-5'>
                     <AiOutlineMoon className='absolute rotate-0 scale-1 dark:rotate-180 dark:scale-0 size-full transition-transform' />
                     <AiOutlineSun className='absolute -rotate-180 scale-0 dark:rotate-0 dark:scale-100 size-full text-white transition-transform' />
                  </span>
               </button>
            </div>
            <ul className='relative flex gap-1 h-full'>
               {/* //TODO: add delete selected feature */}
               {/* <li>
                  <button className='p-2 rounded-full transition-colors duration-300 hover:bg-red-600'>
                     <AiOutlineDelete className='size-5' />
                  </button>
               </li> */}
               <li className='hidden md:list-item'>
                  <button
                     className='rounded-full p-2 transition-colors duration-300 text-slate-700 dark:text-white  hover:bg-gray-300/50 dark:hover:bg-slate-800'
                     onClick={toggleViewMode}
                  >
                     <span className='relative flex justify-center items-center size-5'>
                        <MdOutlineAutoAwesomeMosaic
                           className={`${
                              showAsList
                                 ? 'scale-1 rotate-0 '
                                 : 'scale-0 rotate-180'
                           } absolute size-5 transition-transform`}
                        />
                        <MdFormatListBulleted
                           className={`${
                              showAsList
                                 ? 'scale-0 -rotate-180'
                                 : 'scale-1 rotate-0'
                           } absolute size-5 transition-transform`}
                        />
                     </span>
                  </button>
               </li>
               <li>
                  <button
                     className='p-2 rounded-full transition-colors duration-300 text-slate-700 hover:text-white dark:text-white hover:bg-blue-600'
                     onClick={() => setOpenForm(true)}
                  >
                     <AiOutlinePlus className='size-5' />
                  </button>
               </li>
            </ul>
         </nav>
         {openForm && (
            <Suspense
               fallback={
                  <Loading className='fixed grid place-content-center size-full inset-0 bg-black/10 z-10 [&>*]:size-10' />
               }
            >
               <FactForm
                  handleSubmit={handleSubmit}
                  open={openForm}
                  close={closeForm}
               />
            </Suspense>
         )}
      </>
   );
}

Header.propTypes = {
   showAsList: PropTypes.bool,
   addFact: PropTypes.func,
   toggleViewMode: PropTypes.func,
};
