export default function JokesComponent({setup, punchline}) {
  return (
    <div className=" text-center bg-slate-100 rounded-lg shadow-2xl shadow-slate-400 border-red-200 border-2 py-8 px-5">
      <h1 className="text-3xl font-bold">{setup}</h1>
      <p className="text-xl font-normal mt-5">{punchline}</p>
    </div>
  );
}
