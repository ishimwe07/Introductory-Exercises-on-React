
export default function Card(props){
    console.log(props)
    return (
    <div className="bg-blue-100 rounded-2xl p-10 shadow-xl shadow-blue-500">
        <img className="rounded-2xl" src={props.image} alt={props.description} />
        <h1 className="text-2xl font-bold">{props.name}</h1>
        <p className="text-xl font-medium">{props.job}</p>
    </div>
    )
}