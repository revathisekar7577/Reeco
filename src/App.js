import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import data from "./productData.json";

function App() {
  const {products} = data;
  return (
    <>
    <div className='grid grid-cols-4 gap-4 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 p-6'>
    {(products || []).map((product,index) =>(
          <Card product={product} key={index}/>
    ))}
    </div>
   
    </>
  );
}

export default App;
