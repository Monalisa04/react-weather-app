import React, { useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import cities from "./world-cities";
import { setSearchLocation } from "../actions/search-actions";
import { connect } from "react-redux";

class Search extends React.Component<any> {
  ref:any = React.createRef();
  handleInputChange = (selected: any) => {
    console.log("Inside handleInputChange");
    if (typeof selected !== undefined && selected !== null) {
      if (Array.isArray(selected)) {
        if (selected[0] && selected[0].city && selected[0].country) {
          const { city, country } = selected[0];
          this.props.setSearchLocation(city, country);
        }
      }
    }
  };
  render() {
    return (
      <React.Fragment>
        <Typeahead
          options={cities}
          multiple={false}
          labelKey="city"
          id="city"
          onChange={this.handleInputChange}
          placeholder="Search City"
          onFocus={() => this.ref.current.clear()}
          ref={this.ref}
        />
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    setSearchLocation: (city: string, country: string) =>
      dispatch(setSearchLocation(city, country))
  };
};

export default connect(null, mapDispatchToProps)(Search);
