# @arturonavarro/use-star-wars-quote

> 

[![NPM](https://img.shields.io/npm/v/@arturonavarro/use-star-wars-quote.svg)](https://www.npmjs.com/package/@arturonavarro/use-star-wars-quote) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @arturonavarro/use-star-wars-quote
```

## Usage

```jsx
import React from 'react'
import { useStarWarsQuote } from '@arturonavarro/use-star-wars-quote'

const Example = () => {
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
```

## License

MIT © [Arturo](https://github.com/Arturo)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
