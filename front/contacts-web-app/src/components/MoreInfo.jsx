import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { selectedIdContext } from "./ContactProvider";
import { Button } from "@material-ui/core";

const MoreInfo = () => {
  let [selectedId, setSelectedId] = useContext(selectedIdContext);
  let [contact, setContact] = useState({});

  // alert(selectedId)

  //////////////////// --------------GET ALL CONTACTS--------------/////////////////////////////
  async function getContactById() {
    const url = "http://localhost:3001/contacts/" + selectedId;
    let response = await fetch(url);
    if (response.ok) {
      let data = await response.json();
      setContact(data);
    } else {
      alert("HTTP-Error: " + response.status);
    }
  }

  return (
    
    <div>
  {/* /////-----LOAD DATA BUTTON------//// */}
  <Button
        variant="contained"
        color="primary"
        className="mt-3"
        onClick={getContactById}
      >
        Load Data
      </Button>      <form style={{ width: "500px", margin: "0 auto" }}>
        <h1>Contact Details</h1>

        {/*      ------------------ Name ------------------     */}
        <div className="form-group">
          <label>Name</label>
          <div className="alert alert-danger pt-2" role="alert">
            {contact.firstName}
          </div>
        </div>

        {/*      ------------------ Surname ------------------     */}
        <div className="form-group">
          <label>Surname</label>
          <div className="alert alert-danger pt-2" role="alert">
            {contact.lastName}
          </div>
        </div>

        {/*      ------------------ PhoneNumber ------------------     */}
        <div className="form-group">
          <label>PhoneNumber</label>
          <div className="alert alert-danger pt-2" role="alert">
            {contact.phone}
          </div>
        </div>

        {/*      ------------------ PhoneType ------------------     */}
        <div className="form-group">
          <label style={{ width: "200px" }}>PhoneType </label>
          <div className="alert alert-danger  pt-2" role="alert">
            {contact.phoneType}
          </div>
        </div>

        {/*      ------------------ Created  Date ------------------     */}
        <div className="form-group">
          <label>Created Date</label>
          <div className="alert alert-danger  pt-2" role="alert">
            {contact.createdDate}
          </div>
        </div>

        {/*      ------------------ Updated  Date ------------------     */}
        <div className="form-group">
          <label>Updated Date</label>
          <div className="alert alert-danger pt-2" role="alert">
            {contact.modifiedDate}
          </div>
        </div>

        {/*      ------------------ CANCEL  BUTTON ------------------     */}
        <Link to="" className="btn btn-primary">
          Cancel
        </Link>
      </form>
    </div>
  );
};

export default MoreInfo;
