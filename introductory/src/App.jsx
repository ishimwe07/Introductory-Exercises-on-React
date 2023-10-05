import List from "./listComponent"


function App() {

  const arrayOfAnimals = [  "dog",   "cat",   "chicken",   "cow",   "sheep",   "horse"];
  const arrayOfComponents = arrayOfAnimals.map((el, index)=> <List key={index} name={el} />)
    return (
    <div className="m-5">
      {arrayOfComponents}
    </div>
  )
}

export default App