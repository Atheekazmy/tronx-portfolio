import React from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";

const OutlinedButtons = ({ color, label, handleClick }) => {
  return (
    <Button onclick={handleClick} variant="outlined" color={color}>
      {label}
    </Button>
  );
};

OutlinedButtons.propTypes = {
  color: PropTypes.string,
  label: PropTypes.string,
  handleClick: PropTypes.func,
};

export default OutlinedButtons;
