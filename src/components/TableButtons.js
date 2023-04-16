const TableButtons = ({ setFormTitle }) => {
  const openModal = () => setFormTitle("Create record");

  return (
    <div className="mt-3">
      <button
        className="btn btn-success btn-sm"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
        onClick={openModal}
      >
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
};

export default TableButtons;
