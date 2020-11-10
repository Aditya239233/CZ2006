import React, { Fragment, useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProfile, getCurrentProfile } from "../../actions/profile";
import $ from "jquery";
import locations from "../../assets/location.svg";
import house1 from "../../assets/house1.jpg";
import house2 from "../../assets/house2.jpg";
import house3 from "../../assets/house3.png";
import house4 from "../../assets/house4.jpeg";
import house5 from "../../assets/house5.jpg";

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

      if (data.result.records[0]){        
      var text = `<div class="house">
                  <img src=${house1} alt="" class="image"></img>
                  <img src=${locations} alt="" class="locationimage"></img>
                  <div class="location">
                  ${data.result.records[0].street_name}
                  </div>
                  <div class="price">
                  S\$${data.result.records[0].resale_price}
                  </div>
                  <div class="others">
                  ${data.result.records[0].flat_model}
                  ${data.result.records[0].floor_area_sqm}sqm
                  Built: ${data.result.records[0].lease_commence_date}
                  </div>
                  </div>
                  <br><br><div class="house">
                  <img src=${house2} alt="" class="image"></img>
                  <img src=${locations} alt="" class="locationimage"></img>
                  <div class="location">
                  ${data.result.records[1].street_name}
                  </div>
                  <div class="price">
                  S\$${data.result.records[1].resale_price}
                  </div>
                  <div class="others">
                  ${data.result.records[1].flat_model}
                  ${data.result.records[1].floor_area_sqm}sqm
                  Built: ${data.result.records[1].lease_commence_date}
                  </div>
                  </div>
                  <br><br><div class="house">
                  <img src=${house3} alt="" class="image"></img>
                  <img src=${locations} alt="" class="locationimage"></img>
                  <div class="location">
                  ${data.result.records[2].street_name}
                  </div>
                  <div class="price">
                  S\$${data.result.records[2].resale_price}
                  </div>
                  <div class="others">
                  ${data.result.records[2].flat_model}
                  ${data.result.records[2].floor_area_sqm}sqm
                  Built: ${data.result.records[2].lease_commence_date}
                  </div>
                  </div>
                  <br><br><div class="house">
                  <img src=${house4} alt="" class="image"></img>
                  <img src=${locations} alt="" class="locationimage"></img>
                  <div class="location">
                  ${data.result.records[3].street_name}
                  </div>
                  <div class="price">
                  S\$${data.result.records[3].resale_price}
                  </div>
                  <div class="others">
                  ${data.result.records[3].flat_model}
                  ${data.result.records[3].floor_area_sqm}sqm
                  Built: ${data.result.records[3].lease_commence_date}
                  </div>
                  </div>
                  <br><br><div class="house">
                  <img src=${house5} alt="" class="image"></img>
                  <img src=${locations} alt="" class="locationimage"></img>
                  <div class="location">
                  ${data.result.records[4].street_name}
                  </div>
                  <div class="price">
                  S\$${data.result.records[4].resale_price}
                  </div>
                  <div class="others">
                  ${data.result.records[4].flat_model}
                  ${data.result.records[4].floor_area_sqm}sqm
                  Built: ${data.result.records[4].lease_commence_date}
                  </div>
                  </div>
                  <br><br>`;
                }else{
                  var text = `<div class="house"><h1>No Results Found.</h1></div>`
      
                }

      $(".mypanel").html(text);
    }
  );

  return (
    <Fragment>
      <h1 className="large text-primary">Results Page</h1>
      <div class="mypanel"></div>
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
