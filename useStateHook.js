import React, { useCallback, useEffect, useState } from "react";

let hookState ;
let hookSetStateListners = [];

const useStateHook = () => {

    const setState = useState(hookState)[1];

    useEffect(() => {        
        hookSetStateListners.push(setState);
        return () => {            
                hookSetStateListners = hookSetStateListners.filter(listner => listner !== setState);
        }
    }, []);

    const setHookState = useCallback((state) => {
        hookState = state;        
        for(const hookSetStateListner of hookSetStateListners) {
            hookSetStateListner(state);
        }
    }, []);

    return {hookState, setHookState};

}

export default useStateHook;