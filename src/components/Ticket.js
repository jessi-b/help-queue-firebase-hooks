import React from "react";
import PropTypes from "prop-types";

function Ticket(props){

    const myStyledComponentStyles = {
      backgroundColor: '#ecf0f1',
      fontFamily: 'sans-serif',
      paddingTop: '50px'
    }

  return (
    <React.Fragment>
      <div style={myStyledComponentStyles} onClick = {() => props.whenTicketClicked(props.id)}>
        <h3>{props.location} - {props.names}</h3>
        <p><em>{props.issue}</em></p>
        <p><em>{props.formattedWaitTime}</em></p>
      </div>
      <hr/>
    </React.Fragment>
  );
}

Ticket.propTypes = {
  names: PropTypes.string,
  location: PropTypes.string,
  issue: PropTypes.string,
  id: PropTypes.string,
  formattedWaitTime: PropTypes.string,
  whenTicketClicked: PropTypes.func
};

export default Ticket;