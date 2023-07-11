import React, { createContext, useReducer } from 'react';

export const reducer = (state, action) => {
    const { current } = state;
    let result;

    switch (action.type) {
        case actions.increment:
            result = state[current].timeLeft + action.payload;
            return {
                ...state,
                [current]: {
                    ...state[current],
                    timeLeft: result > 3600 ? 3600 : state[current].timeLeft + action.payload
                }
            };
        case actions.decrement:
            result = state[current].timeLeft - action.payload;
            return {
                ...state,
                [current]: {
                    ...state[current],
                    timeLeft: result <= 0 ? 0 : state[current].timeLeft - action.payload
                }
            };
        case actions.reset:
            return {
                ...state,
                [current]: {
                    ...state[current],
                    timeLeft: state[current].initialTime
                }
            };
        case actions.changeSession:
            return {
                ...state,
                current: current === "work" ? "break" : "work"
            };
        default:
            return {
                ...state
            };
    }
};

// Context
export const actions = {
    increment: "INCREMENT_CURRENT",
    decrement: "DECREMENT_CURRENT",
    reset: "RESET_CURRENT",
    changeSession: "CHANGE_SESSION",
};

export const initialContext = {
    current: "work",
    work: {
        name: "work",
        initialTime: 1500,
        timeLeft: 1500
    },
    break: {
        name: "break",
        initialTime: 300,
        timeLeft: 300
    }
};


export const Context = createContext(initialContext);

export const ContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialContext);

    return (
        <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
    );
};
