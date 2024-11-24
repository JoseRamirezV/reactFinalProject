import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ItemList from './components/ItemList';
import { useFacts } from './hooks/useFacts';

function App() {
   const { facts, isLoaded, addFact, deleteFact, updateFact } = useFacts();
   const [showAsList, setShowAsList] = useState(false);

   const toggleViewMode = () => setShowAsList(!showAsList);

   return (
      <>
         <Header
            addFact={addFact}
            showAsList={showAsList}
            toggleViewMode={toggleViewMode}
         />
         {isLoaded && (
            <ItemList
               showAsList={showAsList}
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
