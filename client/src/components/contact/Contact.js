import React, { Component, Fragment } from "react";
import { sendMessage } from "../../actions/sendMessage";
import store from "../../store";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      message: "",
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    store.dispatch(sendMessage(this.state.email, this.state.message));
    alert("Email sent successfully");
  };

  render() {
    return (
      <Fragment>
        <h1 className="large text-primary">Contact Us</h1>
        <form className="form" onSubmit={this.onSubmit}>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              onChange={this.onChange}
              required
              id="email"
            />
          </div>
          <div className="form-group">
            <textarea
              id="message"
              onChange={this.onChange}
              placeholder="Do you have any Complaints or Suggestions?"
              required
              style={{ height: "150px" }}
            ></textarea>
          </div>
          <input type="submit" className="btn btn-primary" value="Submit" />
        </form>
      </Fragment>
    );
  }
}

export default Contact;
