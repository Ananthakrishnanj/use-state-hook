
# use-state-hook

A simple react hook for global state management


## Installation

Install use-state-hook with npm

```bash
  npm install use-state-hook
```
    
## Usage/Examples

```javascript
import useHookState from 'use-hook-state'

function App() {

  const {setHookState} = useHookState();

  useEffect(() => {
  setHookState(0); //Initiaize the global state value in the wrapper component
  }, []);
  
  return (
    <CounterDisplay />
    <CountIncrementButton />
  )
}

function CounterDisplay() {
  const {hookState} = useHookState(); // Access the global state
  return (
    <span>{hookState}</span>
  )
}

function CountIncrementButton() {
  const {hookState,setHookState} = useHookState(); //setHookState funtion to update global state 
  return(
    <button onClick={() => setHookState(hookState+1)}>Increment count!</button>
  )
}
```


## Screenshots

![App Screenshot](https://i.postimg.cc/MzNq8RDD/use-state-hook.gif)

