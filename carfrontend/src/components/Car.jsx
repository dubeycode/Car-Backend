const Car = ({ make, model, year, price }) => {
  return (
    <div>
      <p>Make: {make}</p>
      <p>Model: {model}</p>
      <p>Year: {year}</p>
      <p>Price: {price}</p>
    </div>
  )
}

export default Car