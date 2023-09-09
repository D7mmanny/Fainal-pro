interface allstat{
    
      supervisorName: string;
      type: string;
      factory: string;
      report: string;


}

function AllFactoryReports(props:allstat) {
    return (
        <div >
            <div className='border-solid border-b-2 flex border-gray-500 shadow-2xl '>
                <h4 className='bg-white w-1/5 h-14 border-solid border-r-2 border-gray-500 flex justify-center items-center'>{props.supervisorName}</h4>
                <h4 className='bg-white w-1/5 h-14 border-solid border-r-2 border-gray-500 flex justify-center items-center'>
                    {props.type =="Monthly report" && <h4 className="bg-green-100 text-green-600 rounded-full p-2">Monthly report</h4>}
                    {props.type =="Shutdown" && <h4 className="bg-red-100 text-red-600 rounded-full p-2">Shutdown</h4>}
                     </h4>
                <h4 className='bg-white w-1/5 h-14 border-solid border-r-2 border-gray-500 flex justify-center items-center'>{props.factory}</h4>
                <h4 className='bg-white w-2/5 h-14 flex justify-center items-center'>{props.report}</h4>
            </div>
        </div>
      )
}

export default AllFactoryReports