import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(url);
        setData(res.data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const reFetch = async () => {
    setLoading(true);
    try {
      const res = await axios.get(url);
      setData(res.data);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  return { data, loading, error, reFetch };
};

export default useFetch;
// import  { useEffect, useState } from "react";

// const useFetch = (url) => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await fetch(url);
//         const data = await response.json();
//         setData(data);
//         setError(false);
//         setLoading(false);
//       } catch (error) {
//         setError(true);
//         return error;
//       }
//     }
//     fetchData();
//   }, [url]);

//   return { data, loading, error };
// };

// export default useFetch;
