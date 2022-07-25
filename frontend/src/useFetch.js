import {useEffect, useState} from 'react'

const useFetch = (url) => {

    const [data, setData] = useState([])

    useEffect(()=>{
        const fetchData = async() => {
          const result = await fetch(url);
          const jsonData = await result.json();
          setData(jsonData)
        }
        fetchData();
      },[url])

      return {data: data}
}

export default useFetch;