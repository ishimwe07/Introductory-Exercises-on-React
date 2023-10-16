import { nanoid } from "nanoid";
import List from "./listComponent";

export default function App() {
  const arrayOfAnimals = ["dog", "cat", "chicken", "cow", "sheep", "horse"];
  const arrayOfComponents = arrayOfAnimals.map((animal) => (
    <List key={nanoid()} name={animal} />
  ));
  return <div className="m-5">{arrayOfComponents}</div>;
}
