interface TechnicianName{
    name:""
}
function TechnicianName(props:TechnicianName) {
  return (
    <div>

        <input type="checkbox" value={props.name}  />
        <label htmlFor="">{props.name}</label>
       
    </div>
  )
}

export default TechnicianName