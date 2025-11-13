import { useEffect, useState } from "react";

export function useFetch(fetchFn, initialValue) {
  const [isFetching, setIsfetching] = useState();
  const [error, setError] = useState();
  const [fetchData, setFetchData] = useState(initialValue);
  useEffect(() => {
    async function fetchData() {
      setIsfetching(true);
      try {
        const places = await fetchFn();
        setFetchData(places);
      } catch (error) {
        setError({ message: error.message || "Failed to fetch user places." });
      }

      setIsfetching(false);
    }

    fetchData();
  }, [fetchFn]);

  return {
    isFetching,
    error,
    fetchData,
    setFetchData,
  };
}
