import { useEffect, useState } from "react";

const DEFAULT_HEADER = {
  accept: "application/json",
  Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
};
const useFetch = (
  { url = "", method = "GET", headers = {} },
  { enabled } = { enabled: true }
) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (enabled) {
      setIsLoading(true);
      fetch(`${import.meta.env.VITE_API_HOST}${url}`, {
        method,
        headers: {
          ...DEFAULT_HEADER,
          ...headers,
        },
      })
        .then(async (res) => {
          const contentType = res.headers.get("content-type");
          if (!res.ok) {
            const errorText = await res.text();
            throw new Error(
              `HTTP error! Status: ${res.status}, Message: ${errorText}`
            );
          }

          if (contentType && contentType.includes("application/json")) {
            const data = await res.json();
            setData(data);
          } else {
            setData({});
          }
        })
        .catch((error) => {
          console.error("Fetch error:", error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, method, JSON.stringify(headers), enabled]);

  return { isLoading, data };
};

export default useFetch;
