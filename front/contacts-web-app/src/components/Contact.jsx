import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { selectedIdContext } from "./ContactProvider";
import AlertDialog from "./AlertDialog";

const Contact = ({ id, firstName, lastName, phone }) => {
  let [selectedId, setSelectedId] = useContext(selectedIdContext);

  return (
    <tr>
      <td>{id}</td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{phone}</td>
      <td>
        {/* ////////////--------------MORE INFO------------/////////////- */}
        <Link
          to={"moreInfo/" + id}
          className="btn btn-warning"
          onClick={() => {
            setSelectedId(id);
          }}
        >
          Details
        </Link>
      </td>
      <td>
        {/* ////////////--------------EDIT------------/////////////- */}
        <Link
          to={"/edit/" + id}
          className="btn btn-primary"
          onClick={() => {
            setSelectedId(id);
          }}
        >
          Edit
        </Link>
      </td>
      <td>
        {/* ////////////--------------DELETE------------/////////////- */}
        <AlertDialog selected_id={id} />
      </td>
    </tr>
  );
};

export default Contact;
