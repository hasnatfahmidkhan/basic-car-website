import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const useCarData = (url) => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios(url)
      .then((data) => setCars(data.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [url]);

  return { cars, loading, error };
};

export default useCarData;
