import React from "react"

function App() {
    const [names, setNames] = React.useState({firstName:"",lastName:""})

    function handleChange(event){
      const {name, value} = event.target;
      setNames(prevState => ({...prevState, [name]:value}))
    }

    const greetMe = ()=>{
      alert(`Hello ${names.firstName} ${names.lastName}!`)
    }
    

    return (
      <div className="grid justify-center gap-5 mt-[10%]">
        <input
            className="border-2 border-blue-500 active:border-black py-2 pr-10 rounded-md"
            type="text" 
            placeholder="First Name" 
            value={names.firstName} 
            name="firstName" 
            onChange={(e)=>handleChange(e)}
            />

    <input 
        className="border-2 border-blue-500 active:border-black py-2 pr-10 rounded-md"
        type="text" 
        placeholder="Last Name" 
        value={names.lastName} 
        name="lastName" 
        onChange={(e)=>handleChange(e)}/>


    <button
    className="text-3xl text-white bg-red-600 hover:bg-red-500 active:bg-red-800 py-2 px-12 rounded-xl border-b-4 border-black"
    onClick={greetMe}
    >GREET ME</button>
  </div>
  )
}

export default App
