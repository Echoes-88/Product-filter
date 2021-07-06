import React, { useEffect, useState } from "react";
import { useMount } from "./hooks/useMount"
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./components/Header"
import Input from "./components/Input"
import ProductTable from "./components/ProductTable"

import data from "./data/data.json"
import './App.css';

const App: React.FC = () => {

  const [selectedType, setSelectedType] = useState("None")
  const [inputValue, setInputValue] = useState("")
  const [products, setProducts] = useState<any[] | null>(null)
  const [filteredProducts, setFilteredProducts] = useState<any[] | null>(null)

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

      parsedData.push(obj)
      })
 
      setProducts(parsedData)
      setFilteredProducts(parsedData)

    })


  useEffect(()=> {

    const filtered = products?.filter(product => selectedType != "None" ? product.T.includes(selectedType) : product)

    setFilteredProducts(filtered || null)

  }, [selectedType, products])


  useEffect(()=> {

    const filtered = products?.filter(({PLU, CM, VA}) => 
      PLU.includes(inputValue) ||
      CM.includes(inputValue) ||
      VA.includes(inputValue)
    )

    setFilteredProducts(filtered || null)

  }, [inputValue])


  const handleTypeSelection = (e: any) => {
    setSelectedType(e.target.value);
  }

  return (
    <div className="main-container">

    <Header />

    <Input inputValue={inputValue} setInputValue={setInputValue}/>

    {products && (
     <ProductTable filteredProducts={filteredProducts} selectedType={selectedType} handleTypeSelection={handleTypeSelection}/>
    )}

    </div>
  );
}

export default App;
