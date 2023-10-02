import React from "react";
import Card from "./card";

function App() {

  const [data, setData] = React.useState([]);
  
  function fetchData(){
    fetch("https://random-data-api.com/api/users/random_user?size=10")
        .then(response=> response.json())
        .then(data=> setData(data));
  }
  
  React.useEffect(fetchData,[])


   const components = data.map(el=> <Card key={el.uid} 
                                          image={el.avatar} 
                                          description={`Picture of ${el.address.street_name}`}
                                          job={el.employment.title}
                                          name={el.address.street_name}
                                          firstName={el.first_name}
                                          lastName={el.last_name}
                                          keySkills={el.employment.key_skill}
                                          phoneNumber={el.phone_number}
                                          gender={el.gender}
                                          />)
  
  return (
    <div>
        <button
        className="px-12 py-3 mt-10 mx-[40%] bg-red-600 hover:bg-red-500 active:bg-red-700 border-b-4 border-black rounded-xl"
        onClick={fetchData}
        >Fetch Random</button>
        <div className="grid sm:grid-cols-2 justify-items-center gap-10 mt-5 mx-[5%] bg-slate-300 rounded-md py-10">
          {components}
        </div>
    </div>
  )
}

export default App
