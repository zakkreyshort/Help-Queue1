import React from "react";
import PropTypes from 'prop-types';

function TicketDetail(props){
   const { ticket, onClickingDelete, onClickingEdit } = props;
  
  return (
    <React.Fragment>
      <h1>Ticket Details</h1>
      <h3>{ticket.location} - {ticket.names}</h3>
      <p>{ticket.issue}</p>
      <button onClick={()=> onClickingEdit(ticket) }>Update Ticket</button>
      <button onClick={()=> onClickingDelete(ticket.id) }>Destroy Ticket</button>
      <hr />
    </React.Fragment>
  );
}

TicketDetail.propTypes = {
  ticket: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default TicketDetail;