import { addSeconds } from "date-fns";
import { useEffect, useState } from "react";

const useTimer = (date) => {
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    setTimer(date);
  }, [date]);

  let addtime;
  useEffect(() => {
    addtime = setInterval(() => {
      setTimer(addSeconds(timer, 1));
    }, 1000);

    return () => {
      clearInterval(addtime);
    };
  }, [timer]);

  return {
    timer,
  };
};

export default useTimer;
