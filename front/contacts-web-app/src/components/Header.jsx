import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { ContactContext } from "./ContactProvider";

const Header = () => {

  const  [contacts,setContacts] = useContext(ContactContext);


  return (
    <div>

{/* --------------------------  All Contacts Count  ------------------------------ */}
      <div className="row" style={{backgroundColor:"aqua",height:"50px",paddingTop:"5px"}}>

      <div className="col md-3" style={{paddingTop:"5px" ,fontSize:"20px",color:"red"}}>
        All Contacts Count : {contacts.length}
      </div>

{/* --------------------------  Project NAME  ------------------------------ */}

      <div className="col md-6">
      <h3 style={{margin:"0 auto"}}>Contacts APP</h3>
      </div>

{/* --------------------------  Create Contact Button  ------------------------------ */}

      <div className="col md-3">
      <Link to="/add" className="btn btn-primary ">Create Contact </Link>
      </div>

      </div>
      
    </div>
  );
};

export default Header;
