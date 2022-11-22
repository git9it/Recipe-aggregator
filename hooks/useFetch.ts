import { useEffect, useState, useRef } from 'react';

interface IUseFetch {
  url: string;
  method: string;
  postdata?: object;
}

function useFetch({ url, method = 'get', postdata = {} }) {
  console.log(url, method);
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState<object | null>(null);
  const [error, setError] = useState(null);

  const cache: ICache = useRef({ allRecipes: {}, currentRecipe: {} });

  interface ICache {
    current: {
      allRecipes: {};
      currentRecipe: {};
    };
  }

  useEffect(() => {
    if (!url) return;

    async function fetchData() {
      setLoading(true);
      if (method === 'get') {
        console.log('if method get');
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
            const recipesData = { currentRecipe: json };
            cache.current['currentRecipe'] = json;
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
      if (method === 'post') {
        console.log('if method post');
        try {
          const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(postdata),
          });
          const json = await response.json();
          console.log(json);
          const postReturn = { postReturn: json };
          setData(() => ({
            ...cache.current,
            ...postReturn,
          }));
        } catch (error) {
          console.log(error);
          setError(error);
        }
        setLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return { isLoading, data, error };
}

export default useFetch;
