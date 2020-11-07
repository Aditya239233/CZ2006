import React, { Fragment, useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProfile, getCurrentProfile } from "../../actions/profile";
import MapContainer from "./Map";

const initialState = {
  price: "",
  flat_type: "",
  storey: "",
  remaining_lease: "",
  location: "",
};

const CreateProfile = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
  history,
}) => {
  const [formData, setFormData] = useState(initialState);

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  useEffect(() => {
    if (!profile) getCurrentProfile();
    if (!loading && profile) {
      const profileData = { ...initialState };
      for (const key in profile) {
        if (key in profileData) profileData[key] = profile[key];
      }
      setFormData(profileData);
    }
  }, [loading, getCurrentProfile, profile]);

  const {
    price, flat_type, storey, remaining_lease, location,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history, profile ? true : false);
  };

  return (
    <Fragment>
      <h1 className="large text-primary">Recommendation Tab</h1>
      <p className="lead text-secondary">
         Add some changes to your search query
      </p>
      <small class="red-text">* = required field</small>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <div className="row">
          <div className="col-6">
        <label><span style={{color:"red"}}>*</span> Select Price</label>
        </div>
        <div className="col-6">
          <select name="price" value={price} onChange={onChange}>
            <option value="100000">100,000</option>
            <option value="200000">200,000</option>
            <option value="300000">300,000</option>
            <option value="400000">400,000</option>
            <option value="500000">500,000</option>
            <option value="600000">600,000</option>
            <option value="700000">700,000</option>
            <option value="800000">800,000</option>
          </select>
          </div>
          </div>
          <small className="form-text">
            Give us an idea of what kind of property you are looking for
          </small>
        </div>

        <div className="form-group">
        <div className="row">
          <div className="col-6">
        <label>Select Flat Type</label>
        </div>
        <div className="col-6">
          <select name="flat_type" value={flat_type} onChange={onChange}>
            <option value="1 Room">1 Room</option>
            <option value="2 Room">2 Room</option>
            <option value="3 Room">3 Room</option>
            <option value="4 Room">4 Room</option>
            <option value="5 Room">5 Room</option>
            <option value="Executive">Executive</option>
          </select>
          </div>
          </div>
        </div>

        <div className="form-group">
          <div className="row">
          <div className="col-6">
        <label>Select Storey</label>
        </div>
        <div className="col-6">
          <select name="storey" value={storey} onChange={onChange}>
            <option value="Any">Any</option>
            <option value="1-3 (Low)">1-3 (Low)</option>
            <option value="4-9 (Mid)">4-9 (Mid)</option>
            <option value=">=10 (High)">{'>='}10 (High)</option>
          </select>
          </div>
          </div>
        </div>

        <div className="form-group">
          <div className="row">
          <div className="col-6">
        <label>Select Remaining Lease</label>
        </div>
        <div className="col-6">
          <select name="remaining_lease" value={remaining_lease} onChange={onChange}>
            <option value="Any">Any</option>
            <option value="51-60">51-60</option>
            <option value="61-70">61-70</option>
            <option value="71-80">71-80</option>
            <option value="81-90">81-90</option>
            <option value=">=90">{'>='}90</option>
          </select>
          </div>
          </div>
        </div>
        <div className="form-group">
        <MapContainer></MapContainer>
          <small className="form-text">
          <span style={{color:"red"}}>*</span> Click on the map to select your location
          </small>
        </div>
        
        <input style={{position: "absolute"}} type="submit" className="btn btn-primary my-1" />
        <Link style={{left:"25em", position: "absolute"}} className="btn btn-light my-1" to="/dashboard">
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(CreateProfile)
);
