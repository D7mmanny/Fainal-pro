interface TechnicianName{
    name:""
}
function TechnicianName(props:TechnicianName) {
  return (
    <div>
        <select name="" id="">
            <option value={props.name}>{props.name}</option>
        </select>
    </div>
  )
}

export default TechnicianName