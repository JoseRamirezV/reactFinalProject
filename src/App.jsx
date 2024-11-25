import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import ItemList from './components/ItemList';
import { useFacts } from './hooks/useFacts';
import { setThemePreference } from './utils/setThemePreference';
import Welcome from './components/Welcome';

function App() {
   const { facts, isLoaded, addFact, deleteFact, updateFact } = useFacts();
   const [showAsList, setShowAsList] = useState(false);

   const toggleViewMode = () => setShowAsList(!showAsList);

   useEffect(() => {
      const theme = window.localStorage.getItem('dark-mode') === 'true';
      setThemePreference(theme);
   }, []);

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
         <Welcome />
      </>
   );
}

export default App;
