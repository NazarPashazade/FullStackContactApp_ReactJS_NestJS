import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { selectedIdContext } from "./ContactProvider";
import { Button } from "@material-ui/core";

const EditContact = () => {
  let [selectedId, setSelectedId] = useContext(selectedIdContext);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneType, setPhoneType] = useState("Mobile");
  const [message, setMessage] = useState("");

  function updateName(event) {
    setFirstName(event.target.value);
  }

  function updateSurname(event) {
    setLastName(event.target.value);
  }

  function updatePhoneNumber(event) {
    setPhone(event.target.value);
  }

  function updatePhoneType(event) {
    setPhoneType(event.target.value);
  }

  /////-------------------------------GET Contact By Id----------------------------//////
  async function getContactById() {
    const url = "http://localhost:3001/contacts/" + selectedId;
    let response = await fetch(url);
    if (response.ok) {
      let data = await response.json();
      setPhone(data.phone);
      setPhoneType(data.phoneType);
      setLastName(data.lastName);
      setFirstName(data.firstName);
    } else {
      alert("HTTP-Error: " + response.status);
    }
  }

  //////-------------------------  UPDATE CONTACT  -------------------------------////////////
  function updateContact(event) {
    event.preventDefault(); //////////-----NO REFRESH

    if (firstName && lastName && phone) {
      let newContact = {
        id: selectedId,
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        phoneType: phoneType,
        modifiedDate: new Date(),
      };
      const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newContact),
      };
      fetch("http://localhost:3001/contacts/" + selectedId, requestOptions)
        .then((response) => response.json())
        .then((data) => {
          setMessage("Succesfully Updated");
        });
    } else {
      setMessage("Please fill in empty fields");
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
      </Button>

      <form style={{ width: "500px", margin: "0 auto" }}>
        <h1>Update Contact</h1>

        {/*      ------------------ Name ------------------     */}
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Name..."
            name="firstName"
            value={firstName}
            onChange={updateName}
          ></input>
        </div>

        {/*      ------------------ Surname ------------------     */}
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            className="form-control"
            placeholder="Surname..."
            value={lastName}
            onChange={updateSurname}
          ></input>
        </div>

        {/*      ------------------ PhoneNumber ------------------     */}
        <div className="form-group">
          <label>PhoneNumber</label>
          <input
            type="text"
            name="phone"
            className="form-control"
            placeholder="PhoneNumber..."
            value={phone}
            onChange={updatePhoneNumber}
          ></input>
        </div>

        {/*      ------------------ PhoneType ------------------     */}
        <div className="form-group">
          <label style={{ width: "200px" }}>PhoneType </label>
          <select
            className="selectpicker"
            name="phonoType"
            style={{ width: "100px", height: "40px" }}
            value={phoneType}
            onChange={updatePhoneType}
          >
            <optgroup label="Select One">
              <option>Home</option>
              <option>Work</option>
              <option>Mobile</option>
            </optgroup>
          </select>
        </div>
        {/*      ------------------ UPDATE   BUTTON ------------------     */}
        <button
          type="submit"
          onClick={updateContact}
          className="btn btn-primary mr-5"
        >
          Submit
        </button>

        {/*      ------------------ CANCEL  BUTTON ------------------     */}
        <Link to="" className="btn btn-primary ml-5">
          Cancel
        </Link>

        {/*      ------------------ INFORMATION ------------------     */}

        <div
          className="alert alert-danger mt-3 pt-3"
          style={{ minHeight: "50px" }}
          role="alert"
        >
          {message}
        </div>
      </form>
    </div>
  ); ///return
}; ////main method

export default EditContact;
