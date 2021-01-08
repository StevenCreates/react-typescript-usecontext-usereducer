import React, {createContext, useReducer} from "react";

export const initialValues = {
    returnValue: true,
    On: () => {},
    Off: () => {}
}

export const AppContext = createContext(initialValues)

type State = {
    returnValue: boolean;
}

type Action = {
    type: "one" | "two";
}

function reducer(state: State, action: Action) {
    switch (action.type) {
        case "one": 
            return {returnValue : true}
        case "two": 
            return {returnValue : false}
        default:
            return state
    }
}

export const AppProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialValues)

    return <AppContext.Provider
            value={{
                returnValue: state.returnValue,
                On: () => dispatch({type: "one"}),
                Off: () => dispatch({type: "two"})
            }}>
        {children}
        </AppContext.Provider>
}