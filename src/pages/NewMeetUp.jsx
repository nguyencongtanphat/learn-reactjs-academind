import React from "react";
import { useHistory } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";
function NewMeetUp(props) {
  const history = useHistory();
  const addMeetupHandler = (meetupData) => {
    fetch(
      "https://meetup-project-8e3f4-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
      }
    )
      .then((res) => {
        history.replace("/");
      })
      .catch((err) => {
        alert("failed");
        console.log(err);
      });
  };
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetUp;
