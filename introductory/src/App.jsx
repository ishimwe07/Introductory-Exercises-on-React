import data from "./data.json";
import JokesComponent from "./jokeComponent";

function App() {
  const jokes = data.map((joke) => (
    <JokesComponent
      key={joke.id}
      setup={joke.setup}
      punchline={joke.punchline}
    />
  ));
  return (
    <div className="mx-[10%] my-[2%] grid grid-cols-2 gap-10">{jokes}</div>
  );
}

export default App;
