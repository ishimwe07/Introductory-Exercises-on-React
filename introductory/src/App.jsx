import { nanoid } from "nanoid";
import List from "./listComponent";
export default function App() {
  const arrayOfItems = [
    "dog  ",
    "cat  ",
    "chicken  ",
    "cow  ",
    "sheep  ",
    "horse  ",
  ];
  const arrayOfComponents = arrayOfItems.map((element) => (
    <List key={nanoid()} element={element} />
  ));

  return (
    <ul className="text-2xl marker:bg-yellow-600 mx-40 my-10 p-10 bg-blue-300 rounded-lg list-disc">
      {arrayOfComponents}
    </ul>
  );
}
