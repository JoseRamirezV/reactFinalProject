import PropTypes from 'prop-types';
import '@/css/FactForm.css';

const categories = [
   {
      id: '1e7a3b4f-8c2e-4f6d-b9a2-5c4a6f7b8e9d',
      category: 'Geography',
   },
   {
      id: '2b3e9d7c-4a6b-5f1c-9f3e-8d7a2c9b5e4f',
      category: 'History',
   },
   {
      id: '3d8f2b6c-7a4e-9b1c-5e8d-2c7a3b6f4a5e',
      category: 'Science',
   },
   {
      id: '4b9a2d7e-5c6f-8d1b-3e7a-2f5c9b1a6d4e',
      category: 'Astronomy',
   },
   {
      id: '5f7b2c9e-6a4d-1b8e-9c5a-3e2d7a6b4f1c',
      category: 'Environment',
   },
];

export default function FactForm({ handleSubmit, open, close }) {
   return (
      <dialog
         open={open}
         className={`size-full absolute top-0 left-0 bg-black/10 backdrop-blur-sm ${open ? 'flex justify-center z-10' : ''}`}
      >
         <div className='bg-gray-800 size-fit mt-28 rounded-xl p-8 shadow shadow-white/20 text-white bounce'>
            <header>
               <h2 className='text-3xl mb-6 font-bold'>Fun Fact</h2>
            </header>
            <form
               onSubmit={handleSubmit}
               id='factForm'
               className='flex flex-col gap-4'
            >
               <label className='fact-input'>
                  <input
                     type='text'
                     name='title'
                     id='title'
                     placeholder='Titulo'
                     required
                  />
               </label>
               <label className='fact-input'>
                  <textarea
                     name='fact'
                     className='h-28 resize-none'
                     id='fact'
                     placeholder='Dato curioso'
                     required
                  ></textarea>
               </label>
               <label className='fact-input'>
                  <select
                     name='category'
                     id='category'
                     placeholder='Dato curioso'
                     required
                  >
                     <option value=''>Seleccione categoría</option>
                     {categories.map(({ id, category }) => (
                        <option key={id} value={category}>
                           {category}
                        </option>
                     ))}
                  </select>
               </label>
            </form>
            <footer className='flex flex-row-reverse gap-2 justify-start pt-4'>
               <button className='opt-button bg-blue-600' form='factForm'>
                  Guardar
               </button>
               <button className='opt-button bg-red-600' onClick={close}>
                  Cancelar
               </button>
            </footer>
         </div>
      </dialog>
   );
}

FactForm.propTypes = {
   handleSubmit: PropTypes.func,
   open: PropTypes.bool,
   close: PropTypes.func,
};
