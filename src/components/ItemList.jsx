import PropTypes, { shape } from 'prop-types';
import ItemCard from './ItemCard';

export default function ItemList({
   items,
   showAsList,
   deleteFact,
   updateFact,
}) {
   const listStyles = 'flex flex-col w-2/4';
   const gridStyles =
      (items && items.length) > 0 &&
      'grid grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] w-5/6 ';

   return (
      <section
         className={`${ showAsList ? listStyles : gridStyles } gap-8 mt-10 mx-auto transition-all`}
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
   showAsList: PropTypes.bool,
   deleteFact: PropTypes.func.isRequired,
   updateFact: PropTypes.func.isRequired,
};
