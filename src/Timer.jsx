import React,{useContext, useEffect, useState} from "react";
import {TimeLeft} from "./App";
import {TimerPad} from "./TimerPad";
import {actions, Context} from "./reducer";


export const Timer = () => {
    const { state, dispatch } = useContext(Context);
    const [isActive, setIsActive] = useState(false);

    const { current } = state;

    useEffect(() => {
        let interval = undefined;
        if (!isActive) return;

        interval = setInterval(
            () => dispatch({ type: actions.decrement, payload: 1 }),
            1000
        );
        return () => clearInterval(interval);
    }, [state[current].timeLeft, isActive]);

    return (
        <div>
            <div className="timer__card">
                <p className="timer__current">{current}</p>
                <TimeLeft timeLeft={state[current].timeLeft} />
            </div>
            <TimerPad active={isActive} setActive={setIsActive} />
        </div>
    );
};
