import { useEffect, useState } from "react";
import axios from "axios";


const API_KEY = "81ed5d216ebe4d362cf78679df36331bacbc9e5c";
const GetCourse = (query, get, typeQuery) => {
  const [dateResponse, setDateResponse] = useState(() => []);

  useEffect(() => {
    if (!query || !get) {
      return;
    }
    async function getUser() {
      try {
        const response = await axios.get('https://api.minfin.com.ua/mb/81ed5d216ebe4d362cf78679df36331bacbc9e5c/'

          // `https://api.themoviedb.org/3/${query}?api_key=${API_KEY}&${get}`
        );
        if (typeQuery === "general") {
          setDateResponse(response.data.results);
        }
        if (typeQuery === "details") {
          setDateResponse(response.data);
        }
        
      } catch (error) {
        return alert(
          `Sorry, an error ${error} has occurred. Please try again.`
        );
      }
    }
    getUser();
  }, [query, get, typeQuery]);

  return dateResponse;
};

export default GetCourse;