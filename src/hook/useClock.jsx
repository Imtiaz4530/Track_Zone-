import { addMinutes } from "date-fns";
import { useEffect, useState } from "react";

const timezoneOffset = {
  PST: -8 * 60,
  EST: -5 * 60,
  EDT: -5 * 60,
  BST: 1 * 60,
};

const useClock = (timezone, offset = 0) => {
  const [utc, setUTC] = useState(null);
  const [localDate, setLocalDate] = useState(null);
  const [localOffset, setLocalOffset] = useState(0);

  useEffect(() => {
    let d = new Date();
    const o = d.getTimezoneOffset();
    d = addMinutes(d, o);
    setLocalOffset(o);
    setUTC(d);
  }, []);

  useEffect(() => {
    if (utc !== null) {
      if (timezone) {
        offset = timezoneOffset[timezone] ?? offset;
        const date = addMinutes(utc, offset);
        setLocalDate(date);
      } else {
        const date = addMinutes(utc, -localOffset);
        setLocalDate(date);
      }
    }
  }, [utc, timezone, offset]);

  return {
    date: localDate,
    utc,
    offset: offset ? offset / 60 : -(localOffset / 60),
    timezone: timezone ? timezone : "GMT",
  };
};

export default useClock;
