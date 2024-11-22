const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export const addFactService = async (data) => {
   try {
      const res = await fetch(BASE_URL, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(data),
      });
      return await res.json();
   } catch (error) {
      return {
         ok: false,
         error,
      };
   }
};

export const getFacts = async () => {
   try {
      const res = await fetch(BASE_URL);
      const data = await res.json();

      return data;
   } catch (error) {
      return { error };
   }
};

export const updateFactService = async (id, data) => {
   try {
      const res = await fetch(BASE_URL + id, {
         method: 'PUT',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(data),
      });
      return await res.json();
   } catch (error) {
      console.log({ error });
      return {
         ok: false,
      };
   }
};

export const deleteFactService = async (id) => {
   try {
      const res = await fetch(BASE_URL + id, {
         method: 'DELETE',
      });
      return await res.json();
   } catch (error) {
      return {
         ok: false,
         error,
      };
   }
};
