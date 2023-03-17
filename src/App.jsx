import { useEffect, useState } from "react";
import Card from "./Components/card";
import "./App.css"

function App() {
  const [products, setProducts] = useState([])
  useEffect(() =>{
    const getData = async()=>{
      const response = await fetch('api/products')
      const data = await response.json()
      setProducts(data.products)
    }
    getData()
  },[])

  return(
    <div className="mainContainer">
      {products.map(p => <Card key={p.id} product={p}/>)}
    </div>
  );
}

export default App;
