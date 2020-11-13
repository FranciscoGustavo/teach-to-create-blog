import { useState, useEffect } from 'react';

const useRequest = (promise) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true); 
  const [data, setData] = useState([]); 

  useEffect(() => {
    promise
      .then((data) => {
        setData(data)
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => setLoading(false));
  }, []);

  return [error, loading, data];
}

export default useRequest;
