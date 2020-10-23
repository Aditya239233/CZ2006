import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import logo from "../../assets/logo_main.png";

class Dashboard extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
    return (
      <div style={{ height: "75vh" }} className="container" style={{padding: "20px"}}>
        <div className="row">
          <div className="center-align">
            <img alt="" src={logo} width="175px" height="175px"></img>
          </div>
          <div className="center-align" style={{fontSize: "40px", color: "#4c96d7"}}>Find Your Ideal Home</div>
          <div className="center-align" style={{fontSize: "25px", color: "#e78200"}}>Use House Matcher's property recommendation tool to search for a suitable resale HBD</div>

          <div className="column s6" style={{fontSize: "40px", color: "#4c96d7", padding: "30px 0px 0px 0px"}}>HBD Recommendation Tool</div>
          <div className="center-align" style={{fontSize: "25px", color: "#e78200"}}>Generate a personalised HBD resale recommendation based on your needs</div>
          <div className="center-align" style={{fontSize: "25px", color: "#626262"}}>Tell us the things that you're looking for in a House and we help you to find a suitable HBD for you and plan your future</div>

          <div className="column s6" style={{fontSize: "40px", color: "#4c96d7", padding: "30px 0px 0px 0px"}}>Data Visualization</div>
          <div className="center-align" style={{fontSize: "25px", color: "#e78200"}}>Visualize and understand the trends in the market to make a better investment</div>
          <div className="column s12" style={{fontSize: "25px", color: "#626262", padding: "0px 15px"}}>
            <ol>
              <li>Compare the Prices across various regions using heatmaps</li>
              <li>Contrast between various types of HBD's and their prices</li>
              <li>Find out the Future trends in the market using time-series graphs</li>
            </ol>
          </div>
        </div>
        <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem",
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Dashboard);
