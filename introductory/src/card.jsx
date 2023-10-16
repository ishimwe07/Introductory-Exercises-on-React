export default function Card({
  image,
  description,
  name,
  job,
  firstName,
  lastName,
  gender,
  keySkills,
  phoneNumber,
}) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className="bg-blue-100 rounded-2xl p-10 shadow-xl hover:shadow-blue-800 shadow-blue-500">
            <img className="rounded-2xl" src={image} alt={description} />
            <h1 className="text-2xl font-bold">{name}</h1>
            <p className="text-xl font-medium">{job}</p>
          </div>
        </div>

        <div className="flip-card-back bg-blue-400 rounded-xl p-5 text-xl text-slate-900">
          <span>First Name: {firstName}</span>
          <span>Last Name: {lastName}</span>
          <span>Gender: {gender}</span>
          <span>Employment title: {job} </span>
          <span>Key Skills: {keySkills}</span>
          <span>Phone Number: {phoneNumber}</span>
        </div>
      </div>
    </div>
  );
}
