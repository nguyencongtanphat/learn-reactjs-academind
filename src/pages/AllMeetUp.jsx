import React from "react";
import MeetupList from "../components/meetups/MeetupList";
const DUMMY_DATA = [
  {
    id: "m1",
    title: "This is a first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/f6/Ho_Chi_Minh_City_Skyline_%28night%29.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m2",
    title: "This is a second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
];
function AllMeetUp(props) {
  return (
    <div>
      <h1>AllMeetUp</h1>
      <MeetupList meetups={DUMMY_DATA} />
    </div>
  );
}

export default AllMeetUp;
