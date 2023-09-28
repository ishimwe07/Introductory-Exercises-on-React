import React from "react";
import Button from "./buttonComponent"
import HeroText from "./heroText"

export default function App() {

  const [counts, setCounts] = React.useState(0);

  function handleClick(){
    setCounts(prevCount => prevCount + 1);
  }

    return (
      <div className="mx-[30%] my-[10%] grid justify-items-center gap-5">
        <HeroText counts = {counts} />
        <Button handleClick={handleClick} />
      </div>
  )
}


