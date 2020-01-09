import React from 'react'
import { useStarWarsQuote } from '@arturonavarro/use-star-wars-quote'

const App = () => {
   const { quote, loading } = useStarWarsQuote();

   if (loading) return <p>Loading...</p>;

   if (quote) {
      return (
         <h1>
            {quote}
         </h1>
      );
   }

   return null;
}

export default App