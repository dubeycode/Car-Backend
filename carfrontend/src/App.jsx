import { useEffect, useState } from "react"
import Car from "./components/car";


const App = () => {
  const [cars,setCars] =useState([]);

  useEffect(()=>{
      fetch('api/v1/cars')
      .then(res => res.json())
      .then(data => setCars(data))
  }, []);
  return (
    <div>
      <h1>Welcome To Car Shop</h1>
      <ul>
       {cars.map(car=>(
        <Car key={car.id} {...car} />
       ))}
      </ul>
    </div>
  )
}

export default App