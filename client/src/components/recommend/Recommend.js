import React, { Fragment, useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  createProfile,
  getCurrentProfile,
} from "../../actions/recommendActions";
import $ from 'jquery';

const initialState = {
  price: "",
  flat_type: "",
  storey: "",
  remaining_lease: "",
  location: "",
};

const CreateProfile = ({
  profile: { profile },
  createProfile,
  getCurrentProfile,
  history,
}) => {
  const [formData, setFormData] = useState(initialState);

  //const [displaySocialInputs, toggleSocialInputs] = useState(false);

  useEffect(() => {
    if (!profile) getCurrentProfile();
    if (profile) {
      const profileData = { ...initialState };
      for (const key in profile) {
        if (key in profileData) profileData[key] = profile[key];
      }
      setFormData(profileData);
    }
  }, [getCurrentProfile, profile]);

  const { price, flat_type, storey, remaining_lease, location } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history, profile ? true : false);
  };  

  return (
    <Fragment>
      <h1 className="large text-primary">Recommendation Tab</h1>
      <p className="lead">
        <i className="fas fa-user" /> Add some changes to your search query
      </p>
      <small>* = required field</small>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <select name="price" value={price} onChange={onChange}>
            <option>* Select Price</option>
            <option value="100,000">100,000</option>
            <option value="200,000">200,000</option>
            <option value="300,000">300,000</option>
            <option value="400,000">400,000</option>
            <option value="500,000">500,000</option>
            <option value="600,000">600,000</option>
            <option value="700,000">700,000</option>
            <option value="800,000">800,000</option>
          </select>
          <small className="form-text">
            Give us an idea of what kind of property you are looking for
          </small>
        </div>
        <p class="range-field">
          <input type="range" id="test5" min="0" max="200" name="weight"/>
          <span class="thumb" ><span class="value">100</span></span>
        </p>
        <div className="form-group">
          <input
            type="text"
            placeholder="Flat Type"
            name="flat_type"
            value={flat_type}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Storey"
            name="storey"
            value={storey}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Remaining Lease"
            name="remaining_lease"
            value={remaining_lease}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Location"
            name="location"
            value={location}
            onChange={onChange}
          />
          <small className="form-text">
            City & state suggested (eg. Boston, MA)
          </small>
        </div>

        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" to="/dashboard">
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
