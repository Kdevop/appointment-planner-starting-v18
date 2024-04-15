import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <>
      <form onSubmit={(handleSubmit)}>
        <label>
          Name:
          <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Please enter you name here "First Name Last Name"'
          required
          />
        </label>
        <label>
          Phone:
          <input type='tel'
          value={phone}
          onChange={(e)=> setPhone(e.target.value)}
          placeholder='Please enter your phone number: 01234 567 890'
          // pattern='[0-9][0-9]{4}-[1-9][0-9]{2}-[1-9][0-9]{2}'
          required
          />
        </label>
        <label>
          Email:
          <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Please enter you email: email@email.com"
          required
          />
        </label>
        <button type='submit'>Submit</button>
      </form>

    </>
  );
};

export default ContactForm;