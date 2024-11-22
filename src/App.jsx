import './App.css';
import Header from './components/Header';
import ItemList from './components/ItemList';
import { useFacts } from './hooks/useFacts';

function App() {
   const { facts, addFact, deleteFact, updateFact } = useFacts();

   return (
      <>
         <Header addFact={addFact} />
         <ItemList
            items={facts}
            deleteFact={deleteFact}
            updateFact={updateFact}
         />
      </>
   );
}

export default App;
