export default function List(props){
    return(
        <div className="flex gap-3 border-2 w-48 border-slate-950 p-4">
            <img src={`/${props.name}.jpg`} alt={`${props.name} Image`} className="h-10" />
            <h1 className=  "text-2xl  ">{props.name}</h1>
        </div>
    )
}