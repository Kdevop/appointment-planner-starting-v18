import React from "react";

const ContactPicker = ({contacts, onChange, value, name}) => {
  return (
    <select onChange={onChange} value={value} name={name}>
      <option value='' default>No Contact Selected</option>
      {contacts.map((contact, index) => {
        return (<option key={index} value={contacts.name}>
          {contact.name}
        </option>)
      })}
    </select>
  );
};

export default ContactPicker;