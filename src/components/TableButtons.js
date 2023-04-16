import excelImg from "../assets/excel.png";
import ExcelGenerator from "../services/ExcelGenerator";

const TableButtons = ({ setFormTitle, records }) => {
  const openModal = () => setFormTitle("Create record");
  const DownloadExcelFile = () => {
    ExcelGenerator.generateExcel(records);
  };

  return (
    <div className="mt-3">
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
  );
};

export default TableButtons;
