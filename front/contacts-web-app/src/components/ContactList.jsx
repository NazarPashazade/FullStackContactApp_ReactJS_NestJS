import React, { useContext, useEffect } from "react";
import { ContactContext } from "./ContactProvider";
import Contact from "./Contact";
import { Button } from "@material-ui/core";
const ContactList = () => {
  const [contacts, setContacts] = useContext(ContactContext);

  ////////////////////// --------------GET ALL CONTACTS--------------////////////////////////////

  async function getAllContacts() {
    const url = "http://localhost:3001/contacts";
    let response = await fetch(url);

    if (response.ok) {
      let data = await response.json();
      setContacts(data);
    } else {
      alert("HTTP-Error: " + response.status);
    }
  }

  return (
    <div>
      {/* /////////-------SHOW ALL CONTACTS BUTTON-----/////////// */}
      <Button
        variant="contained"
        color="primary"
        className="mt-3"
        onClick={getAllContacts}
      >Show All Contacts</Button>

      {/* /////////-------SHOW ALL -----/////////// */}
      <Button
        variant="contained"
        color="primary"
        className="mt-3  ml-3"
        onClick={getAllContacts}
      >Refresh</Button>


      <table
        className="table "
        style={{ width: "1000px", margin: "20px auto" }}
      >
        <thead className="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Details</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <Contact
              key={index}
              id={contact.id}
              firstName={contact.firstName}
              lastName={contact.lastName}
              phone={contact.phone}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactList;
