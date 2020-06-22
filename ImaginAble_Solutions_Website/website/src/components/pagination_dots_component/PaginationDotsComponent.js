import React from "react";
import "./PaginationDotsComponent.css";
import PropTypes from "prop-types";

export default function PaginationDotsComponent(props) {
  function handleActivePanelChange(val) {
    props.changeActive({ active: val, dots: props.num_dots });
  }

  var dots = [];
  for (let i = 0; i < props.num_dots; i++) {
    if (i === props.active) {
      dots.push(
        <li className="current" key={i} >
          <span/>
        </li>
      );
    } else {
      dots.push(
        <li className="" key={i}>
          <span onClick={() => handleActivePanelChange(i)} />
        </li>
      );
    }
  }
  return (
    <div className="dotstyle dotstyle-circlegrow" id={props.id}>
      <ul>{dots}</ul>
    </div>
  );
}

PaginationDotsComponent.propTypes = {
  num_dots: PropTypes.number.isRequired,
  active: PropTypes.number.isRequired,
  changeActive: PropTypes.func.isRequired,
  id: PropTypes.string,
};
