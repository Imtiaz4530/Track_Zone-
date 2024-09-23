import { useState } from "react";
import Button from "../ui/Button/Button";

const Eventlist = ({ events }) => {
  const [event, setEvent] = useState(false);

  return (
    <div>
      {!event ? (
        <>
          <h2>No events exist...</h2>
          <Button onClick={() => setEvent(!event)} value="Create Event" />
        </>
      ) : (
        <>
          <h2>Meeting after 02:34 hours.</h2>
          <Button onClick={() => setEvent(!event)} value="Delete Event" />
        </>
      )}
    </div>
  );
};

export default Eventlist;
