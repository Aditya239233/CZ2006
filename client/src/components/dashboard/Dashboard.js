import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import DashboardActions from "./DashboardActions";
import Experience from "./Experience";
import Education from "./Education";
import { getCurrentProfile, deleteAccount } from "../../actions/profile";
import logo from "../../assets/logo_main.png";

const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return loading && profile === null ? (
    <Spinner />
  ) : (
        <div className="row">
          <div className="text-center">
            <img alt="" src={logo} width="175px" height="175px"></img>
          </div>
          <div className="text-center" style={{fontSize: "40px", color: "#4c96d7"}}>Find Your Ideal Home</div>
          <div className="text-center" style={{fontSize: "25px", color: "#e78200"}}>Use House Matcher's property recommendation tool to search for a suitable resale HBD</div>

          <div className="column s6 text-center" style={{fontSize: "40px", color: "#4c96d7", padding: "30px 0px 0px 0px"}}>HBD Recommendation Tool</div>
          <div className="text-center" style={{fontSize: "25px", color: "#e78200"}}>Generate a personalised HBD resale recommendation based on your needs</div>
          <div className="text-center" style={{fontSize: "25px", color: "#626262"}}>Tell us the things that you're looking for in a House and we help you to find a suitable HBD for you and plan your future</div>

          <div className="column s6 text-center" style={{fontSize: "40px", color: "#4c96d7", padding: "30px 0px 0px 0px"}}>Data Visualization</div>
          <div className="text-center" style={{fontSize: "25px", color: "#e78200"}}>Visualize and understand the trends in the market to make a better investment</div>
          <div className="column s12" style={{fontSize: "25px", color: "#626262", padding: "0px 15px"}}>
            <ol className="text-center">
              <li>Compare the Prices across various regions using heatmaps</li>
              <li>Contrast between various types of HBD's and their prices</li>
              <li>Find out the Future trends in the market using time-series graphs</li>
            </ol>
          </div>
        </div>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);
