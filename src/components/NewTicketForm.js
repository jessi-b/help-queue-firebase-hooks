import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
import { useFirestore } from 'react-redux-firebase'

function NewTicketForm(props){
  const firestore = useFirestore();
  function addTicketToFirestore(event) {
    event.preventDefault();
    props.onNewTicketCreation();
    return firestore.collection('tickets').add({  //adds ticket to FS
      names: event.target.names.value,
      location: event.target.location.value, 
      issue: event.target.issue.value,
      timeOpen: firestore.FieldValue.serverTimestamp()
    });
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={addTicketToFirestore}
        buttonText="Submit" />
    </React.Fragment>
  );
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default NewTicketForm;