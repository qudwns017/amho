import React from "react";
import { addspot } from "../../_actions/user_action";
import axios from "axios";

function TicketList() {
  axios
    .get("http://localhost:3000/api/spots/spot")
    .then((Response) => {
      console.log(Response.data);
    })
    .catch((Error) => {
      console.log(Error);
    });
  return (
    <>
      <div>안녕하세요</div>
    </>
  );
}

export default TicketList;
