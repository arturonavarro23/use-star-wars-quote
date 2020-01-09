import { useEffect, useState } from "react";

export function useStarWarsQuote() {
   const [quote, setQuote] = useState('');
   const [loading, setLoading] = useState(false);


   useEffect(() => {
      async function getStarWarsQuote() {
         setLoading(true);

         const response = await fetch(
            'http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote'
         );

         const data = await response.json();
         const quote = data.starWarsQuote;
         setQuote(quote);
         setLoading(false);
      }
      getStarWarsQuote();
   }, []);
   return { quote, loading };
}