import React from "react";
import ContactPicker from '../contactPicker/ContactPicker'

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  return (
    <>
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type='text'
          value={title}
          onChange={(e)=> setTitle(e.target.value)}
          required
          />
      </label>
      <label>
        Date:
        <input
        type='text'
        value={date}
        onChange={(e)=> setDate(e.target.value)}
        required
        />
      </label>
      <label>
        Time:
        <input
          type='text'
          value={time}
          onChange={(e)=> setTime(e.target.value)}
          />
      </label>
      <label>
        <ContactPicker
          contacts={contact}
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          />
      </label>
    </form>
    </>
  );
};
