import { useState, useEffect } from "react";
import TableButtons from "./TableButtons";
import Swal from "sweetalert2";
import RecordsControllerAPI from "../services/RecordsControllerApi";

const Modal = ({
  setRecords,
  data,
  formTitle,
  setFormTitle,
  formInputs,
  setFormInputs,
}) => {
  const {
    activity: fiAction,
    hours: fiHours,
    date: fiDate,
    company: fiCompany,
  } = formInputs;
  const [action, setAction] = useState(fiAction);
  const [hours, setHours] = useState(fiHours);
  const [date, setDate] = useState(fiDate);
  const [company, setCompany] = useState(fiCompany);

  useEffect(() => {
    console.log(fiAction, "ako si fiAction");
    setAction(fiAction);
    setHours(fiHours);
    setDate(fiDate);
    setCompany(fiCompany);
  }, [formInputs]);

  const clearForm = () => {
    setAction("");
    setHours("");
  };

  const Submit = async () => {
    const payload = {
      Activity: action,
      Hours: hours,
      Date: date,
      Company: company,
    };
    const service = new RecordsControllerAPI("https://localhost:7169");

    let alertTitle = "";
    if (formTitle == "Create record") {
      await service.CreateRecord(payload);
      clearForm();
      alertTitle = "Record created";
    } else {
      const { id } = formInputs;
      alertTitle = "Record updated";

      await service.UpdateRecord(id, payload);
    }

    const allRecords = await service.GetAllRecords();
    setRecords(allRecords);

    Swal.fire({
      position: "center",
      icon: "success",
      title: alertTitle,
      showConfirmButton: false,
      timer: 1500,
    });
  };
  return (
    <>
      <TableButtons setFormTitle={setFormTitle} records={data} />

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                {formTitle}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="form-group mt-3">
                <label htmlFor="action" className="form-label">
                  Activity:
                </label>
                <input
                  type="text"
                  name="action"
                  className="form-control"
                  value={action}
                  placeholder="Enter activity here"
                  onChange={(e) => setAction(e.target.value)}
                />
              </div>

              <div className="form-group mt-3">
                <label htmlFor="hours" className="form-label">
                  Hours:
                </label>
                <input
                  type="number"
                  name="hours"
                  className="form-control"
                  value={hours}
                  step={0.5}
                  min={0}
                  onChange={(e) => setHours(e.target.value)}
                />
              </div>

              <div className="form-group mt-3">
                <label htmlFor="date" className="form-label">
                  Date:
                </label>
                <input
                  type="date"
                  name="date"
                  className="form-control"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>

              <div className="form-group mt-3">
                <label htmlFor="company" className="form-label">
                  Company:
                </label>
                <input
                  type="text"
                  name="company"
                  className="form-control"
                  value={company}
                  placeholder="Enter company here"
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                <i
                  className="fa-solid fa-xmark"
                  style={{ color: "#ffffff" }}
                ></i>
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={Submit}
              >
                <i
                  className="fa-solid fa-paper-plane"
                  style={{ color: "#ffffff" }}
                ></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
