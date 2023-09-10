import user from '../assets/user.svg'
interface allstat{
    id: string;
    supervisorName: string;
    type: string;
    factory: string;
    report: string;


}

function AllFactoryReports(props:allstat) {
    
    return (
        <div className='w-full'>
            {/* <div className='border-solid border-b-2 flex border-gray-500 shadow-2xl '>
                <h4 className='bg-white w-1/5 h-14 border-solid border-r-2 border-gray-500 flex justify-center items-center'>{props.supervisorName}</h4>
                <h4 className='bg-white w-1/5 h-14 border-solid border-r-2 border-gray-500 flex justify-center items-center'>
                    {props.type =="Monthly report" && <h4 className="bg-green-100 text-green-600 rounded-full p-2">Monthly report</h4>}
                    {props.type =="Shutdown" && <h4 className="bg-red-100 text-red-600 rounded-full p-2">Shutdown</h4>}
                     </h4>
                <h4 className='bg-white w-1/5 h-14 border-solid border-r-2 border-gray-500 flex justify-center items-center'>{props.factory}</h4>
                <h4 className='bg-white w-2/5 h-14 flex justify-center items-center'><a href={`/FactoryReports/${props.id}`}>{props.report}</a></h4>
            </div> */}
            
            <tr className="text-gray-700">
            <td className="px-4 py-3 border">
              <div className="flex items-center text-sm">
                <div className="relative w-8 h-8 mr-3 rounded-full">
                  <img className="object-cover w-full h-full rounded-full" src={user} alt="" loading="lazy" />
                  <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                </div>
                <div>
                  <p className="font-semibold text-black">{props.supervisorName}</p>
                  <p className="text-xs text-gray-600">supervisor</p>
                </div>
              </div>
            </td>
            <td className="px-4 py-3 text-md font-semibold border">{props.factory}</td>
            <td className="px-4 py-3 text-xs border">
              <span className="px-2 py-1 font-semibold leading-tight bg-gray-100 rounded-sm"> 
              {props.type =="Monthly report" && <h4 className="bg-green-100 text-green-600 rounded-full p-2">Monthly report</h4>}
                    {props.type =="Shutdown" && <h4 className="bg-red-100 text-red-600 rounded-full p-2">Shutdown</h4>} </span>
            </td>
            <td className="px-4 py-3 text-sm border"><a href={`/FactoryReports/${props.id}`}>{props.report}</a></td>
          </tr>
        </div>
      )
}

export default AllFactoryReports