import React, { Fragment, useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  createProfile,
  getCurrentProfile,
} from "../../actions/recommendActions";

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
      <div class="container">
      <h1 className="large text-primary">Recommendation Tab</h1>
      <p className="lead text-secondary">
        <i className="fas fa-user" /> Add some changes to your search query
      </p>
      <small class="red-text">* = required field</small>
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

      <div className="form-group">  
      <label class="horizontal-radio">Flat Type</label>
        <label>
          <input class="with-gap" name="group1" type="radio"/>
          <span class="horizontal-radio">1 Room</span>
        </label>
        <label>
          <input class="with-gap" name="group1" type="radio" />
          <span class="horizontal-radio">2 Room</span>
        </label>
        <label>
          <input class="with-gap" name="group1" type="radio"  />
          <span class="horizontal-radio">3 Room</span>
        </label>
        <label>
          <input class="with-gap" name="group1" type="radio" />
          <span class="horizontal-radio">4 Room </span>
        </label>
        <label>
          <input class="with-gap" name="group1" type="radio" />
          <span class="horizontal-radio">5 Room </span>
        </label>
        <label>
          <input class="with-gap" name="group1" type="radio" />
          <span class="horizontal-radio">Executive</span>
        </label>
      </div>

      <div className="form-group">  
      <label class="horizontal-radio">Storey</label>
        <label>
          <input class="with-gap" name="group2" type="radio"/>
          <span class="horizontal-radio">Any</span>
        </label>
        <label>
          <input class="with-gap" name="group2" type="radio" />
          <span class="horizontal-radio">1-3 (Low)</span>
        </label>
        <label>
          <input class="with-gap" name="group2" type="radio"  />
          <span class="horizontal-radio">4-9 (Mid)</span>
        </label>
        <label>
          <input class="with-gap" name="group2" type="radio" />
          <span class="horizontal-radio">{'>='}10 (High) </span>
        </label>
      </div>

      <div className="form-group">
          <select name="remaining_lease" value={remaining_lease} onChange={onChange}>
            <option>Remaining Lease</option>
            <option value="Any">Any</option>
            <option value="40-50">40-50</option>
            <option value="51-60">51-60</option>
            <option value="61-70">61-70</option>
            <option value="71-80">71-80</option>
            <option value="81-90">81-90</option>
            <option value="> 90">{'>='}90</option>
          </select>
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
            Click on the map to select your location
          </small>
        </div>

        <input type="submit" className="btn btn-primary my-1 horizontal-radio" />
        <Link className="btn btn-light my-1" to="/dashboard">
          Go Back
        </Link>
      </form>
      </div>
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
