import moment from "moment";
import Swal from "sweetalert2";
import RecordsControllerAPI from "../services/RecordsControllerApi";

const Table = ({
  data,
  setRecords,
  setFormTitle,
  formInputs,
  setFormInputs,
}) => {
  const deleteConfirmation = async () => {
    return await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });
  };

  const Delete = async (id) => {
    const confirmation = await deleteConfirmation();

    if (!confirmation.isConfirmed) return;
    const services = new RecordsControllerAPI("https://localhost:7169");
    await services.DeleteRecord(id);
    const allRecords = await services.GetAllRecords();
    setRecords(allRecords);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Record deleted",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  const OpenModal = (id) => {
    setFormTitle("Update record");
    const chosenRecord = data.find((e) => e.id === id);

    setFormInputs(chosenRecord);
  };

  const mapAndRenderRecords = (data) => {
    if (data.length != 0) {
      return data.map((data) => {
        counter++;
        return (
          <tr key={data.id} className="table-light">
            <td scope="row">{counter}</td>
            <td>{data.activity}</td>
            <td>{data.hours}</td>
            <td>{moment(data.created).format("MM/DD/YYYY")}</td>
            <td>{data.company}</td>
            <td>
              <button
                className="btn btn-danger btn-sm table-buttons mx-lg-3"
                onClick={() => Delete(data.id)}
              >
                <i className="fa-solid fa-trash"></i>
              </button>
              <button
                className="btn btn-warning btn-sm table-buttons"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
                onClick={() => OpenModal(data.id)}
              >
                <i className="fa-solid fa-pen" style={{ color: "#ffffff" }}></i>
              </button>
            </td>
          </tr>
        );
      });
    } else {
      return (
        <tr>
          <td colSpan={6} align="center" className="fw-bold text-white">
            No records found
          </td>
        </tr>
      );
    }
  };

  let counter = 0;
  return (
    <>
      <table className="table table-striped rounded table-hover mt-3">
        <thead>
          <tr className="table-dark">
            <th scope="col">#</th>
            <th scope="col">Action</th>
            <th scope="col">Hours</th>
            <th scope="col">Date</th>
            <th scope="col">Company</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>{mapAndRenderRecords(data)}</tbody>
      </table>
    </>
  );
};

export default Table;
