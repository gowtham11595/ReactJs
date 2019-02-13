import React from "react";

function ContactCard(props) {
  return (
    <div>
      <img src={props.contact.imgUrl} />
      <h3>{props.contact.name}</h3>
    </div>
  );
}

export default ContactCard;
