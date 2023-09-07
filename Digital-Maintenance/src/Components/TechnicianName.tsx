import User from '../assets/user.svg'

interface TechnicianName{
    name: string
}
function TechnicianName(props:TechnicianName) {
  return (
    <div>
        <div className="w-80">
            <div className="bg-myGray w-80 h-14 flex rounded-2xl mt-3  items-center">
            <img className=" w-12 p-2" src={User} alt="a" />
            <a href="">{props.name}</a>
           
            </div>
            
        </div>
       
       
    </div>
  )
}

export default TechnicianName