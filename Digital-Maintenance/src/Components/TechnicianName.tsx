interface TechnicianName{
    name:""
}
function TechnicianName(props:TechnicianName) {
  return (
    <div className="">
        <div className="w-80 ">
            <div className="bg-myGray w-96 h-14 flex rounded-2xl">
            <img className="p-2" src="https://img.freepik.com/premium-vector/gray-avatar-icon-vector-illustration_276184-163.jpg?w=2000" alt="a" />
            <h1>{props.name}</h1>
            </div>
            
        </div>
       
       
    </div>
  )
}

export default TechnicianName