import axios from "axios";
import { createContext, useEffect, useState } from "react";

export let CategoriesContext = createContext();

export default function CategoriesContextProvider(props) {
    const [Categories, setCategories] = useState([]);


useEffect(() => {
    getCategories()
    return () => {
        
    };
}, []);

    function getCategories(){
       axios.get("https://fakestoreapi.com/products").then(res => setCategories(res.data))
    }


  return (
    <CategoriesContext.Provider value={{Categories}}>
      {props.children}
    </CategoriesContext.Provider>
  );
}
