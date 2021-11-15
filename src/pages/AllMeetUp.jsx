import React, { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetUp(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetup, setLoadedMeetup] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://meetup-project-8e3f4-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }
        setLoadedMeetup(meetups);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading ...</p>
      </section>
    );
  }
  return (
    <div>
      <h1>AllMeetUp</h1>
      <MeetupList meetups={loadedMeetup} />
    </div>
  );
}

export default AllMeetUp;
