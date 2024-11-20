import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ItemList from './components/ItemList';
import items from '@/mock.json'

function App() {
   const [facts, setFacts] = useState([...items])

   const addFact = (fact) => {
      setFacts(prev => [...prev, fact])

   }
   return (
      <>
         <Header addFact={addFact}/>
         <ItemList items={facts}/>
      </>
   );
}

export default App;
