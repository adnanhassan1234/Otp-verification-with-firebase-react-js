import React from 'react';
import classes from "./index.module.scss";
import img from "Images/searchIcon.svg";

const Search = (props) => {
  return (
    <div className={classes.searcBox}>
      <input
        type="search"
        value={props.search}
        placeholder={props.placeholder}
        onChange={props.handleSearch}
      />
  </div>
  )
}

export default Search;