import React, {useContext} from 'react';
import {actions, Context} from "./reducer";



export const TimerPad = ({ active, setActive }) => {
    const { state, dispatch } = useContext(Context);

    return (
        <div className="timer__pad">
            <button
                type="button"
                className={`btn ${active ? 'btn-red' : null} pad__start`}
                onClick={() => setActive(!active)}
            >
                {active ? "Stop" : "Start"}
            </button>
            <button
                type="button"
                className="btn pad__plus-five"
                onClick={() => dispatch({ type: actions.increment, payload: 300 })}
            >
                +5
            </button>
            <button
                type="button"
                className="btn pad__minus-five"
                onClick={() => dispatch({ type: actions.decrement, payload: 300 })}
            >
                -5
            </button>
            <button
                type="button"
                className="btn pad__reset"
                onClick={() => {
                    setActive(false);
                    dispatch({ type: actions.reset });
                }}
            >
                Reset
            </button>
            <button
                type="button"
                className="btn pad__change"
                onClick={() => {
                    setActive(false);
                    dispatch({ type: actions.changeSession });
                }}
            >
                Change
            </button>
        </div>
    );
};