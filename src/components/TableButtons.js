import excelImg from "../assets/excel.png";
import ExcelGenerator from "../services/ExcelGenerator";

const TableButtons = ({ setFormTitle, records }) => {
  const openModal = () => setFormTitle("Create record");
  const DownloadExcelFile = () => {
    ExcelGenerator.generateExcel(records);
  };
  function sumHours(records) {
    return records.reduce((total, current) => total + current.hours, 0);
  }

  return (
    <div className="mt-3 d-flex justify-content-between">
      <div>
        <button
          className="btn bg-tertiary btn-sm"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
          onClick={openModal}
        >
          <i className="fa-solid fa-plus color-white"></i>
        </button>
        <button
          className="btn bg-tertiary color-white btn-sm mx-3"
          onClick={DownloadExcelFile}
        >
          <img
            src={excelImg}
            alt="Excel Image"
            style={{ width: "20px", height: "20px" }}
          />
          &nbsp; Export
        </button>
      </div>
      <div>
        <span className="btn color-white btn-sm bg-fourth">
          Total hours: {sumHours(records)}
        </span>
      </div>
    </div>
  );
};

export default TableButtons;
