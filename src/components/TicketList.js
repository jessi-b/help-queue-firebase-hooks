import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import React from "react";
import PropTypes from "prop-types";
import Ticket from "./Ticket";

function TicketList(props){
  useFirestoreConnect([{  //hook from react-redux-firebase allows us to listen for changes to Firestore without using an HOC in a class component.
    collection: 'tickets' 
  }]);
  const tickets = useSelector(state => state.firestore.ordered.tickets);  //hook from react-redux allows us to extract data from a Redux store
  if (isLoaded(tickets)) {   //react-redux-firebase allow us to check if a collection has been retrieved from Firestore
    return (
      <React.Fragment>
        <hr/>
        {tickets.map((ticket) => {
          return <Ticket
            whenTicketClicked = { props.onTicketSelection }
            names={ticket.names}
            location={ticket.location}
            issue={ticket.issue}
            formattedWaitTime={ticket.formattedWaitTime}
            id={ticket.id}
            key={ticket.id}/>
        })}
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    )
  }
}

TicketList.propTypes = {
  onTicketSelection: PropTypes.func
};

export default TicketList;