import React, { useState, createContext } from "react";

/////////CREATE CONTEXT
export const ContactContext = createContext();
export const selectedIdContext = createContext();

/////////CREATE PROVIDER
export default function ContactProvider(props) {
  const [contacts, setContacts] = useState([]);
  const [selectedId, setSelectedId] = useState(0);

  return (
    <div>
      <ContactContext.Provider value={[contacts, setContacts]}>
      <selectedIdContext.Provider value={[selectedId, setSelectedId]}>
        {props.children}
        </selectedIdContext.Provider>
        </ContactContext.Provider>
    </div>
  );
}
