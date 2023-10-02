import List from "./listComponent";

function App() {
  const arrayOfItems = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];
  const arrayOfComponents = arrayOfItems.map((element, index) => <List key={index} element={element} />)


    return (
    <ul className="text-2xl marker:bg-yellow-600 mx-40 my-10 p-10 bg-blue-300 rounded-lg list-disc">
      {arrayOfComponents}
    </ul>
  )
}

export default App
