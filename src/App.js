import { useState, useEffect } from "react";
import "./App.css";
import Table from "./components/Table";
import Modal from "./components/Modal";
import Header from "./components/Header";
import RecordsControllerAPI from "./services/RecordsControllerApi";
import moment from "moment";

function App() {
  const initialFormInputs = {
    activity: "",
    hours: 0,
    date: moment(new Date().now).format("YYYY-MM-DD"),
    company: "",
  };
  const [records, setRecords] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const recordsHelper = new RecordsControllerAPI("https://localhost:7169");
      const allRecords = await recordsHelper.GetAllRecords();
      setRecords(allRecords);
    }
    fetchData();
  }, []);

  const [formTitle, setFormTitle] = useState("Create Record");
  const [formInputs, setFormInputs] = useState(initialFormInputs);

  return (
    <div className="container mt-5 p-5 rounded bg-secondary ">
      <Header />
      <Modal
        data={records}
        setRecords={setRecords}
        formTitle={formTitle}
        setFormTitle={setFormTitle}
        formInputs={formInputs}
        setFormInputs={setFormInputs}
      />
      <Table
        data={records}
        setRecords={setRecords}
        setFormTitle={setFormTitle}
        formInputs={formInputs}
        setFormInputs={setFormInputs}
      />
    </div>
  );
}

export default App;
