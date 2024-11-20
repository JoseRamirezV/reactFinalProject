import PropTypes, { shape } from 'prop-types';
import ItemCard from './ItemCard';

export default function ItemList({ items }) {
   return (
      <section className='grid grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] w-5/6 gap-8 mt-10 mx-auto'>
         {items.map((item) => (
            <ItemCard key={item.id} item={item} />
         ))}
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
   ),
};
