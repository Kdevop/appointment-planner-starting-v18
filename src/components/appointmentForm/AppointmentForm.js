import React from "react";
import ContactPicker from '../contactPicker/ContactPicker'

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  title,
  setTitle,
  contacts,
  setContacts,
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
      <button type='submit'>Submit</button>
      <label>
        <ContactPicker
          contacts={contacts}
          value={contacts}
          onChange={(e) => setContacts(e.target.value)}
          />
      </label>
    </form>
    </>
  );
};
