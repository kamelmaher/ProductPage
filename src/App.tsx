import { useState } from 'react'
import './App.css'
import Main from './components/Main'
import Nav from './components/nav'
function App() {
  const [products, setProducts] = useState<number[]>([]);
  const [count, setCount] = useState(0);
  const [notempty, setNotEmpty] = useState(false);
    const handleClick = ()=> {
    if(count > 0) { 
      const newProduct = count;
      setProducts([newProduct, ...products]);
      setCount(0);
      setNotEmpty(true)
    }
  }
    const addCount = (number: number)=> {
      setCount(count => count + number)
    }
    const clear = ()=> {
      setProducts([]);
    }
    const deleteProduct = (id:number)=> {
      const newData = products.filter((e) => products.indexOf(e) != id)
      setProducts(newData);
    }
  return (
    <>
      <div className="container app">
        <Nav products={products} clear={clear} deletet= {deleteProduct} empty= {notempty}/>
        <Main counter={count} click={handleClick} count={addCount}/>
      </div>
    </>
  )
}

export default App
