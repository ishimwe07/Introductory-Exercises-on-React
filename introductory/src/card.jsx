
export default function Card(props){
    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <div className="bg-blue-100 rounded-2xl p-10 shadow-xl hover:shadow-blue-800 shadow-blue-500">
                        <img className="rounded-2xl" src={props.image} alt={props.description} />
                        <h1 className="text-2xl font-bold">{props.name}</h1>
                        <p className="text-xl font-medium">{props.job}</p>
                    </div>
                </div>

                <div className="flip-card-back bg-blue-400 rounded-xl p-5 text-xl text-slate-900">
                    <h1>First Name: {props.firstName}</h1>
                    <h1>Last Name: {props.lastName}</h1>
                    <h1>Gender: {props.gender}</h1>
                    <h1>Employment title: {props.job} </h1>
                    <h1>Key Skills: {props.keySkills}</h1>
                    <h1>Phone Number: <br /> {props.phoneNumber}</h1>
                </div>
            </div>
        </div>
    )
}



    // <div className="bg-blue-100 rounded-2xl p-10 shadow-xl hover:shadow-blue-800 shadow-blue-500">
    //     <img className="rounded-2xl" src={props.image} alt={props.description} />
    //     <h1 className="text-2xl font-bold">{props.name}</h1>
    //     <p className="text-xl font-medium">{props.job}</p>
    // </div>

    