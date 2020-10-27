import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
// import { Icon } from "semantic-ui-react";

import { connect } from "react-redux";

class Navbar_ extends Component {
  render() {
    const { user } = this.props;
    return (
      <nav>
        <div className="nav-wrapper white">
          <div className="left" style={{ padding: "5px" }}>
            <img alt="" src={logo} width="60" height="60" />
          </div>
          <div
            className="left black-text"
            style={{ padding: "0px 10px", fontSize: "25px" }}
          >
            House Matchers
          </div>
          <div className="left" style={{ padding: "0px 10px" }}>
            <Link className="black-text" to="/dashboard">
              Home
            </Link>
          </div>
          <div className="left" style={{ padding: "0px 10px" }}>
            <Link className="black-text" to="/create-profile">
              Recommend
            </Link>
          </div>
          <div className="left" style={{ padding: "0px 10px" }}>
            <Link className="black-text" to="/visualization">
              Visualization
            </Link>
          </div>
          <div className="left" style={{ padding: "0px 10px" }}>
            <Link className="black-text" to="/contact">
              Contact
            </Link>
          </div>
          <a
            href="#"
            className="right black-text"
            data-target="slide-out"
            style={{ padding: "0px 20px" }}
          >
            <i className="material-icons">settings</i>
          </a>
          <div className="right black-text" style={{ padding: "0px 10px" }}>
            {user.isAuthenticated ? user.user.name : "Not Logged In"}
          </div>
          <div className="right black-text">
            <i className="material-icons">account_circle</i>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth,
  };
};

export default connect(mapStateToProps)(Navbar_);
