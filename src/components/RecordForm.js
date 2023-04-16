import React, { useState } from "react";

const RecordForm = ({ formData, setFormData }) => {
  const [action, setAction] = useState("");
  const [hours, setHours] = useState(0);
  const [date, setDate] = useState(new Date().toLocaleDateString("en-us"));
  const [company, setCompany] = useState("");

  action;

  return <></>;
};

export default RecordForm;
