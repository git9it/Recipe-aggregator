import axios from 'axios';

import { useEffect, useState, useRef } from 'react';

function useFetch(url) {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const cache: ICache = useRef({ allRecipes: {}, currentRecipe: {} });

  interface ICache {
    current: {
      allRecipes: {};
      currentRecipe: {};
    };
  }

  console.log(url);
  useEffect(() => {
    if (!url) return;

    async function fetchData() {
      setLoading(true);

      try {
        const response = await fetch(url);
        const json = await response.json();

        if (json.results) {
          cache.current['allRecipes'] = json;
          const recipesData = { allRecipes: json };
          setData(() => ({
            ...recipesData,
          }));
        } else {
          console.log(json);
          console.log(cache.current.allRecipes);
          const recipesData = { currentRecipe: json };
          setData(() => ({
            ...cache.current,
            ...recipesData,
          }));
        }
      } catch (error) {
        setError(error);
      }

      setLoading(false);
    }

    fetchData();
  }, [url]);

  return { isLoading, data, error };
}

export default useFetch;
