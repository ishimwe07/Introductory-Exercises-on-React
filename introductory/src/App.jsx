

function App() {
  function handleClick(){
    alert("Clicked!");
  }
    return (
      <div className="bg-red-100 h-screen flex justify-center items-center ">
        <button 
          className=
          "px-16 py-5 bg-slate-600 hover:bg-slate-400 active:bg-slate-800 text-amber-100 rounded-lg"
          onClick={handleClick}
          >
            Click Me
          </button>
      </div>
  )
}

export default App
