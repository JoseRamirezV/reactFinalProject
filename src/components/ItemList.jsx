import PropTypes, { shape } from 'prop-types';
import ItemCard from './ItemCard';

export default function ItemList({ items, deleteFact, updateFact }) {
   return (
      <section
         className={`grid w-5/6 gap-8 mt-10 mx-auto ${
            items &&
            items.length > 0 &&
            'grid-cols-[repeat(auto-fill,minmax(15rem,1fr))]'
         }`}
      >
         {items && items.length > 0 ? (
            items.map((item) => (
               <ItemCard
                  key={item._id}
                  item={item}
                  deleteFact={deleteFact}
                  updateFact={updateFact}
               />
            ))
         ) : (
            <div className='p-20'>
               <h2 className='text-2xl text-gray-400 font-semibold'>
                  No hay hechos para mostrar
               </h2>
            </div>
         )}
      </section>
   );
}

ItemList.propTypes = {
   items: PropTypes.arrayOf(
      shape({
         title: PropTypes.string,
         description: PropTypes.string,
         category: PropTypes.string,
      })
   ).isRequired,
   deleteFact: PropTypes.func.isRequired,
   updateFact: PropTypes.func.isRequired,
};
