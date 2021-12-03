import React, { useEffect, useState } from "react";

let hookState ;
let hookSetStateListners = [];

const useStateHook = (initialState = undefined, shouldListen = true) => {

    if(initialState) {
        hookState = initialState;
    }
    const setState = useState(hookState)[1];

    useEffect(() => {
        if(shouldListen) {
            hookSetStateListners.push(setState);
        }
        return () => {
            if(shouldListen) {
                hookSetStateListners = hookSetStateListners.filter(li => li !== setState);
            }
        }
    }, [shouldListen, setState]);

    const setHookState = (state) => {
        hookState = state;
        for(const hookSetStateListner of hookSetStateListners) {
            hookSetStateListner(state);
        }
    }

    return {hookState, setHookState};

}

export default useStateHook;