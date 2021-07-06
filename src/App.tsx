import React, { useEffect, useState } from "react";
import { useMount } from "./hooks/useMount"
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./components/Header"
import Input from "./components/Input"
import ProductData from "./components/ProductData"

import data from "./data/data.json"
import './App.css';

const App: React.FC = () => {

  const [selectedType, setSelectedType] = useState("None")
  const [inputValue, setInputValue] = useState("")
  const [products, setProducts] = useState<any[] | null>(null)
  const [filteredProducts, setFilteredProducts] = useState<any[] | null>(null)

   /**
   * Get products data on mount
   */
    useMount(()=> {
      const regex = /([^_:]+):([^_]+)/g;
      const parsedData: any[] = []
  
      data.map(elt => {
  
        let m;
        let obj: any = {};
        
        while ((m = regex.exec(elt)) !== null) {

          if(!["T", "PLU", "CM", "VA"].includes(m[1])) {
            continue
          }
          obj[m[1]] = m[2]
        }

      return parsedData.push(obj)
      })
 
      setProducts(parsedData)
      setFilteredProducts(parsedData)

    })

   /**
   * Filter products by type
   */
  useEffect(()=> {

    const filtered = products?.filter(product => selectedType !== "None" ? product.T.includes(selectedType) : product)

    setFilteredProducts(filtered || null)

  }, [selectedType, products])

  
   /**
   * Filter products by code, commodity, variety
   */
  useEffect(()=> {

    const filtered = products?.filter(({PLU, CM, VA}) => 
      PLU.includes(inputValue) ||
      CM.includes(inputValue) ||
      VA.includes(inputValue)
    )

    setFilteredProducts(filtered || null)

  }, [inputValue, products])



  return (
    <div className="main-container">

    <Header />

    <Input inputValue={inputValue} setInputValue={setInputValue}/>

    {products && (
     <ProductData filteredProducts={filteredProducts} selectedType={selectedType} handleTypeSelection={(e) => setSelectedType(e.target.value)}/>
    )}

    </div>
  );
}

export default App;
