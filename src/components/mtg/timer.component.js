import {useState} from "react";

const Timer = ({secProp}) => {
    const [second, setSecond] = useState(secProp);
    const [timer, setTimer] = useState();

    const clearTimer = () => {
        clearInterval(timer);
    }

    const setTime = (value) => {
        if(value === 'reset'){
            setSecond(secProp);
        }
    }

    const startTime = () => {
        if(timer){
            clearTimer();
        }

        const newInterval = setInterval(() => {
            setSecond((s) => (s <= 0 ? 59 : s -= 1));
        }, 1000)

        setTimer(newInterval);
    }

    const stopTime = () => clearTimer();

    return [setTime, startTime, stopTime, second]
}

export default Timer;