export default function Button({handleClick}) {
  return (
    <button
      className="text-2xl text-amber-100 bg-slate-500 hover:bg-slate-400 active:bg-slate-700 px-8 py-4 rounded-lg w-44"
      onClick={handleClick}
    >
      Click Me!
    </button>
  );
}
