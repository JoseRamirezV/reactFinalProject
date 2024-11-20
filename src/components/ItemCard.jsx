import PropTypes from 'prop-types';
import { FaRegTrashCan } from 'react-icons/fa6';
import { LuPencil } from 'react-icons/lu';

export default function Item({ item }) {
   return (
      <div className='size-full flex flex-col bg-gray-700/50 rounded-2xl shadow-lg p-4 pb-0 group'>
         <header className='text-xl font-bold text-start mb-1 line-clamp-1'>
            {item.title}
         </header>
         <p className='text-orange-200 text-pretty text-start text-sm line-clamp-4 mb-auto'>
            {item.fact}
         </p>
         <footer className='relative text-xs text-start my-4 flex-grow-1'>
            <a href='#' className='hover:underline block py-2'>
               {item.category}
            </a>
            <div className='absolute right-0 bottom-0 flex gap-2 transform scale-0 group-hover:scale-100 origin-right transition-transform'>
               <button className='rounded-xl p-2 bg-amber-500 hover:scale-110 transition-all'>
                  <LuPencil className='size-4' />
               </button>
               <button className='rounded-xl p-2 bg-red-500 hover:scale-110 transition-all'>
                  <FaRegTrashCan className='size-4' />
               </button>
            </div>
         </footer>
      </div>
   );
}

Item.propTypes = {
   item: PropTypes.shape({
      title: PropTypes.string,
      fact: PropTypes.string,
      category: PropTypes.string,
   }),
};
