import { useEffect, useState } from 'react';
import axios from 'axios';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, [url]);
  return { data, isLoading, error };
}

export default useFetch;
