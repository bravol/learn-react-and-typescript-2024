import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import { useEffect, useState } from "react";

type Props = {
  max: number;
  onFinished: () => void;
};
let timer: NodeJS.Timeout;
const Timer = (props: Props) => {
  const [progress, setProgress] = useState<number>(props.max);

  useEffect(() => {
    if (progress <= 0) {
      props.onFinished();
      clearInterval(timer);
    }
  }, [progress]);

  useEffect(() => {
    timer = setInterval(() => {
      setProgress((progress) => progress - 1);
    }, 1000);
    //clean up function
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <CircularProgress max={props.max} value={progress}>
      <CircularProgressLabel>{progress}'</CircularProgressLabel>
    </CircularProgress>
  );
};

export default Timer;
