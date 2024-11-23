import {
   addFactService,
   deleteFactService,
   getFacts,
   updateFactService,
} from '@/services/fact.service';
import { useEffect, useState } from 'react';

export const useFacts = () => {
   const [facts, setFacts] = useState([]);
   const [isLoaded, setIsLoaded] = useState(false)

   useEffect(() => {
      getFacts().then((res) => {
         setFacts(res);
         setIsLoaded(true)
      });
   }, []);

   const addFact = async (fact) => {
      const { ok, fact: newFact } = await addFactService({
         userEmail: 'jr.ramirez.varon@gmail.com',
         ...fact,
      });
      if (!ok) return;
      setFacts((prev) => [newFact, ...prev]);
   };

   const deleteFact = async (id) => {
      const { ok } = await deleteFactService(id);
      if (!ok) return;
      setFacts((prev) => prev.filter((fact) => fact._id !== id));
   };

   const updateFact = async (id, updatedData) => {
      const { ok, fact: updatedFact } = await updateFactService(
         id,
         updatedData
      );

      if (!ok) return;

      const factIndex = facts.findIndex((fact) => fact._id === id);
      const updatedFacts = [
         ...facts.slice(0, factIndex),
         updatedFact,
         ...facts.slice(factIndex + 1),
      ];
      setFacts(updatedFacts);
   };

   return {
      facts,
      isLoaded,
      addFact,
      deleteFact,
      updateFact,
   };
};
