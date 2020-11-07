import React, { Fragment, useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProfile, getCurrentProfile } from "../../actions/profile";
import $ from "jquery";

const initialState = {
  price: "",
  flat_type: "",
  storey: "",
  remaining_lease: "",
  location: "",
};

const CreateProfile = ({
  profile: { profile, loading },
  getCurrentProfile,
}) => {
  const [formData, setFormData] = useState(initialState);

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

  const { price, flat_type, storey, remaining_lease, location } = formData;

  const price_url = price.toString();
  const flat_type_url = "";
  const storey_url = "";
  const remaining_lease_url = "";
  const location_lease_url = "BEDOK";
  $.getJSON(
    "https://data.gov.sg/api/action/datastore_search?resource_id=42ff9cfe-abe5-4b54-beda-c88f9bb438ee&limit=5&q=" +
      price_url +
      " " +
      flat_type_url +
      " " +
      storey_url +
      " " +
      remaining_lease_url +
      " " +
      location_lease_url,
    function (data) {
      var text = `Town 1: ${data.result.records[0].town}<br>
                    Flat type 1: ${data.result.records[0].flat_type}<br>
                    Block 1: ${data.result.records[0].block}<br>
                    Street name 1: ${data.result.records[0].street_name}<br>
                    Storey range 1: ${data.result.records[0].storey_range}<br>
                    Floor area sqm 1: ${data.result.records[0].floor_area_sqm}<br>
                    Flat model 1: ${data.result.records[0].flat_model}<br>
                    Lease commence date 1: ${data.result.records[0].lease_commence_date}<br>
                    Remaining lease 1: ${data.result.records[0].remaining_lease}<br>
                    Resale price 1: ${data.result.records[0].resale_price}<br>
                    <br>
                    Town 2: ${data.result.records[1].town}<br>
                    Flat type 2: ${data.result.records[1].flat_type}<br>
                    Block 2: ${data.result.records[1].block}<br>
                    Street name 2: ${data.result.records[1].street_name}<br>
                    Storey range 2: ${data.result.records[1].storey_range}<br>
                    Floor area sqm 2: ${data.result.records[1].floor_area_sqm}<br>
                    Flat model 2: ${data.result.records[1].flat_model}<br>
                    Lease commence date 2: ${data.result.records[1].lease_commence_date}<br>
                    Remaining lease 2: ${data.result.records[1].remaining_lease}<br>
                    Resale price 2: ${data.result.records[1].resale_price}<br>
                    <br>
                    Town 3: ${data.result.records[2].town}<br>
                    Flat type 3: ${data.result.records[2].flat_type}<br>
                    Block 3: ${data.result.records[2].block}<br>
                    Street name 3: ${data.result.records[2].street_name}<br>
                    Storey range 3: ${data.result.records[2].storey_range}<br>
                    Floor area sqm 3: ${data.result.records[2].floor_area_sqm}<br>
                    Flat model 3: ${data.result.records[2].flat_model}<br>
                    Lease commence date 3: ${data.result.records[2].lease_commence_date}<br>
                    Remaining lease 3: ${data.result.records[2].remaining_lease}<br>
                    Resale price 3: ${data.result.records[2].resale_price}<br>
                    <br>
                    Town 4: ${data.result.records[3].town}<br>
                    Flat type 4: ${data.result.records[3].flat_type}<br>
                    Block 4: ${data.result.records[3].block}<br>
                    Street name 4: ${data.result.records[3].street_name}<br>
                    Storey range 4: ${data.result.records[3].storey_range}<br>
                    Floor area sqm 4: ${data.result.records[3].floor_area_sqm}<br>
                    Flat model 4: ${data.result.records[3].flat_model}<br>
                    Lease commence date 4: ${data.result.records[3].lease_commence_date}<br>
                    Remaining lease 4: ${data.result.records[3].remaining_lease}<br>
                    Resale price 4: ${data.result.records[3].resale_price}<br>
                    <br>
                    Town 5: ${data.result.records[4].town}<br>
                    Flat type 5: ${data.result.records[4].flat_type}<br>
                    Block 5: ${data.result.records[4].block}<br>
                    Street name 5: ${data.result.records[4].street_name}<br>
                    Storey range 5: ${data.result.records[4].storey_range}<br>
                    Floor area sqm 5: ${data.result.records[4].floor_area_sqm}<br>
                    Flat model 5: ${data.result.records[4].flat_model}<br>
                    Lease commence date 5: ${data.result.records[4].lease_commence_date}<br>
                    Remaining lease 5: ${data.result.records[4].remaining_lease}<br>
                    Resale price 5: ${data.result.records[4].resale_price}<br>
                    <br>`;

      $(".mypanel").html(text);
    }
  );

  return (
    <Fragment>
      <section className="container">
        <h1 className="large text-primary">Results Page</h1>

        <div class="mypanel"></div>
      </section>
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
