interface TechnicianName{
    name:""
}
function TechnicianName(props:TechnicianName) {
  return (
    <div>
        <div className="w-80 ">
            <div className="bg-myGray w-96 h-14 flex rounded-2xl">
            <img className="p-2" src="https://img.freepik.com/premium-vector/gray-avatar-icon-vector-illustration_276184-163.jpg?w=2000" alt="a" />
            <a href="">{props.name}</a>
           
            </div>
            
        </div>
       
       
    </div>
  )
}

export default TechnicianName