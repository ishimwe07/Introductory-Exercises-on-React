

function App() {
  function handleClick(){
    alert("Clicked!");
  }
    return (
    <button 
      className=
      "px-16 py-5 bg-slate-600 hover:bg-slate-400 active:bg-slate-800 text-amber-100 rounded-lg mx-[40%] my-[20%]"
      onClick={handleClick}
      >
        Click Me
      </button>
  )
}

export default App
