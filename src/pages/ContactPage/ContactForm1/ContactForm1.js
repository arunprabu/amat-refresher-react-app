import React, { useState } from 'react'

const ContactForm1 = () => {
  const [formData, setFormData] = useState({
    nameInput: "",
    emailInput: "",
    phoneInput: "",
  });

  const handleSubmit = (event) => {
    console.log("submitted");
    event.preventDefault();
    console.log(event);
    // read the form data
    console.log(formData);
  };

  const handleChange = (event) => {
    console.log(event.target.name);
    console.log(event.target.value);
    setFormData({
      ...formData,
      [event.target.name]: event.target.value, // computed property
    });
  };

  return (
    <form className="col-md-4" onSubmit={handleSubmit}>
      <div className="pb-3">
        <label htmlFor="nameInput">Enter Name</label>
        <input
          type="text"
          placeholder="Enter your Name"
          className="form-control"
          id="nameInput"
          name="nameInput"
          value={formData.nameInput}
          onChange={handleChange}
        />
      </div>
      <div className="pb-3">
        <label htmlFor="emailInput">Enter E-Mail</label>
        <input
          type="email"
          placeholder="Enter your E-Mail"
          className="form-control"
          name="emailInput"
          value={formData.emailInput}
          id="emailInput"
          onChange={handleChange}
        />
      </div>
      <div className="pb-3">
        <label htmlFor="phoneInput">Enter Phone</label>
        <input
          type="number"
          placeholder="Enter your Phone"
          className="form-control"
          name="phoneInput"
          value={formData.phoneInput}
          id="phoneInput"
          onChange={handleChange}
        />
      </div>
      <div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
}

export default ContactForm1