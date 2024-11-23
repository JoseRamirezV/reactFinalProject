import './App.css';
import Header from './components/Header';
import ItemList from './components/ItemList';
import { useFacts } from './hooks/useFacts';

function App() {
   const { facts, isLoaded, addFact, deleteFact, updateFact } = useFacts();

   return (
      <>
         <Header addFact={addFact} />
         {isLoaded && (
            <ItemList
               items={facts}
               isLoaded={isLoaded}
               deleteFact={deleteFact}
               updateFact={updateFact}
            />
         )}
      </>
   );
}

export default App;
