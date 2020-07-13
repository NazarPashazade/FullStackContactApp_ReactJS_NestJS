import React, { useState } from "react";
import { Link } from "react-router-dom";
// import ContactContext from "./ContactProvider";

const AddContact = () => {
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

  ///-------------------------------- ---ADD CONTACT------------------------------------//////////
  function addContact(event) {
    event.preventDefault(); //////////NO REFRESH

    let regexpNumber = new RegExp(/^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/); ///// REGAX --- (055) 236-5265

    if (regexpNumber.test(phone)) {
      if (firstName && lastName && phone) {
        let newContact = {
          firstName: firstName,
          lastName: lastName,
          phone: phone,
          phoneType: phoneType,
        };
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newContact),
        };
        fetch("http://localhost:3001/contacts", requestOptions)
          .then((response) => response.json())
          .then((data) => {
            setMessage("Succesfully Added");
          });
      } else {
        setMessage("Please fill in empty fields !");
      }
    } else {
      setMessage("Invalid PhoneNumber Type !");
    }
  }

  return (
    <form style={{ width: "500px", margin: "0 auto" }}>
      <h1>Create Contact</h1>

      {/*      ------------------ Name ------------------     */}
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          value={firstName}
          className="form-control"
          placeholder="Name..."
          onChange={updateName}
        ></input>
      </div>

      {/*      ------------------ Surname ------------------     */}
      <div className="form-group">
        <label>Surname</label>
        <input
          type="text"
          value={lastName}
          className="form-control"
          placeholder="Surname..."
          onChange={updateSurname}
        ></input>
      </div>

      {/*      ------------------ PhoneNumber ------------------     */}
      <div className="form-group">
        <label>PhoneNumber</label>
        <input
          type="text"
          value={phone}
          className="form-control"
          placeholder="(XXX) XXX-XXXX"
          onChange={updatePhoneNumber}
        ></input>
      </div>

      {/*      ------------------ PhonoType ------------------     */}
      <div className="form-group">
        <label style={{ width: "200px" }}>PhoneType </label>
        <select
          className="selectpicker"
          value={phoneType}
          onChange={updatePhoneType}
          style={{ width: "100px", height: "40px" }}
        >
          <optgroup label="Select One">
            <option>Home</option>
            <option>Work</option>
            <option>Mobile</option>
          </optgroup>
        </select>
      </div>

      {/*      ------------------ SAVE   BUTTON ------------------     */}

      <button
        type="submit"
        className="btn btn-primary mr-5"
        onClick={addContact}
      >
        Save
      </button>

      {/*      ------------------ CANCEL   BUTTON ------------------     */}
      <Link to="" className="btn btn-primary ml-5">
        Cancel
      </Link>

      {/*      ------------------ INFORMATION ------------------     */}

      <div
        class="alert alert-danger mt-3 pt-3"
        role="alert"
        style={{ minHeight: "50px" }}
      >
        {message}
      </div>
    </form>
  ); ///return
}; ///main function

export default AddContact;
