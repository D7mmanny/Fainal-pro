import React from "react";
import axios from "axios";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

function SuperReportComponent() {
  type task = {
    id: string;
    supervisorName: string;
    type: string;
    factory: string;
    report: string;
  };

  const handleDownload = () => {
    const input = document.getElementById('pdf-content');

    if (input) {
      html2canvas(input).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4'); // 'p' for portrait mode, 'mm' for millimeters, 'a4' for A4 size
        pdf.addImage(imgData, 'PNG', 0, 0, 210, 297); // A4 dimensions: 210mm x 297mm
        pdf.save('webpage.pdf');
      });
    }
  };

  const [taskApi, setTaskApi] = React.useState<task[]>([]);
  const taskId = localStorage.getItem("taskId");

  React.useEffect(() => {
    axios
      .get("https://64f8e5cc824680fd21802e48.mockapi.io/FactoryReport")
      .then((response) => {
        setTaskApi(response.data);
      });
  }, []);

  return (
    <div className="flex flex-col">
    <button className="text-start" onClick={handleDownload}>Download as PDF</button>
    <div>
      {taskApi.map((task) => {
        if (taskId == task.id) {
          console.log("success");

          return (
            <>
            <div className="shadow-lg">
              <div id="pdf-content" className=" bg-white ReportComponent flex flex-col items-center gap-7  rounded-sm">
                <h1 className="text-xl mt-8 font-semibold underline">
                  {task.factory}
                </h1>
                <div>
                  <hr className="border border-black w-full border-1" />
                  <div className="text-xs flex gap-9 mt-2 mb-2">
                    <h1 className="ml-1">
                      Supervisor name: {task.supervisorName}
                    </h1>
                    <h1 className="ml-1">Report type: {task.type}</h1>
                  </div>
                  <hr className="border border-black w-full border-1" />
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h1 className=" font-semibold">Reports:</h1>
                  <div className=" w-3/4 border mt-7 reportBorder border-black">
                    <p className="text-xs text-center mt-5">{task.report}</p>
                  </div>
                </div>
              </div>
              </div>
            </>
          );
        }
      })}
      </div>
    </div>
  );
}

export default SuperReportComponent;
