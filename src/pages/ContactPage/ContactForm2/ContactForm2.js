import React, { Component } from 'react'

class ContactForm2 extends Component {
  state = {
    nameInput: "",
    emailInput: "",
    phoneInput: "",
  };

  handleChange = (event) => {
    console.log(event);
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <form className="col-md-4" onSubmit={this.handleSubmit}>
        <div className="pb-3">
          <label htmlFor="nameInput">Enter Name</label>
          <input
            type="text"
            placeholder="Enter your Name"
            className="form-control"
            id="nameInput"
            name="nameInput"
            value={this.state.nameInput}
            onChange={this.handleChange}
          />
        </div>
        <div className="pb-3">
          <label htmlFor="emailInput">Enter E-Mail</label>
          <input
            type="email"
            placeholder="Enter your E-Mail"
            className="form-control"
            name="emailInput"
            id="emailInput"
            value={this.state.emailInput}
            onChange={this.handleChange}
          />
        </div>
        <div className="pb-3">
          <label htmlFor="phoneInput">Enter Phone</label>
          <input
            type="number"
            placeholder="Enter your Phone"
            className="form-control"
            name="phoneInput"
            id="phoneInput"
            value={this.state.phoneInput}
            onChange={this.handleChange}
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
}

export default ContactForm2