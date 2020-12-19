import { useState, useEffect} from 'react';
import API_KEY from "./keys";

const CONTEXT_KEY="c11537f8adf9b11ee"

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null); 

  useEffect(() => {
    const fetchData = async() =>{
        fetch(
            `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
        )
        .then(response => response.json())//change the response to get to json from the response
        .then(result => {
            setData(result)
        })
    }

    fetchData();
  }, [term])

  return { data }
};

export default useGoogleSearch;
