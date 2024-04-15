import React from "react";

const ContactPicker = ({contacts, onChange, value, name}) => {
  return (
    <select onChange={onChange} value={value} name={name}>
      <option value='' default>No Contract Selected</option>
      {contacts.map((contacts, index)=> {
        <option key={index} value={contacts.name}>
          {contacts.name}
        </option>
      })}
    </select>
  );
};

export default ContactPicker;