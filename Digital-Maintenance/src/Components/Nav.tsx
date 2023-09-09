

//assets
import WhiteLogo from "../assets/WhiteLogo.svg";
import WhiteLogo2 from "../assets/WhiteLogo2.svg";
import Direct from "../assets/direct.svg";
import User from "../assets/user.svg";

function Nav() {

  const name = localStorage.getItem("username");
  const type = localStorage.getItem("type");
 
  return (
    <div>
      {type == "manager" && (
        <nav className="bg-dark-blue flex justify-between">
          <div className="flex gap-5 justify-center items-center">
            <img className="w-14 py-3 ml-5" src={WhiteLogo} />
            <a href="/TechnicianReport" className=" cursor-pointer"><img className="w-10 py-3 ml-5" src={Direct} /></a>
          </div>
          <div className="flex justify-center items-center text-white gap-4">
            {name}
            <a href="/Dashboard" className=" cursor-pointer"><img className="w-12 py-3 mr-5" src={User} /></a>
          </div>
        </nav>
      )}
      {type == "Supervisor" && (
        <nav className="bg-light-blue flex justify-between">
          <div className="flex gap-5 justify-center items-center">
            <img className="w-14 py-3 ml-5" src={WhiteLogo2} />
            <a href="/TechnicianReport" className=" cursor-pointer"><img className="w-10 py-3 ml-5" src={Direct} /></a>
          </div>
          <div className="flex justify-center items-center text-white gap-4">
            {name}
            <a href="/Dashboard"  className=" cursor-pointer"><img className="w-12 py-3 mr-5" src={User} /></a>
          </div>
        </nav>
      )}
      {type == "Technician" && (
        <nav className="bg-light-blue flex justify-between">
          <div className="flex gap-5">
            <img className="w-14 py-3 ml-5" src={WhiteLogo2} />
          </div>
          <div className="flex justify-center items-center text-white gap-4">
            {name}
            <a href="/Dashboard"  className=" cursor-pointer"><img className="w-12 py-3 mr-5" src={User} /></a>
          </div>
        </nav>
      )}
      
      
    </div>
  );
}

export default Nav;
