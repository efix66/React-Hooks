import "./App.css";
import Counter1 from "./useReducer/Counter1";
import HookCounterOne from "./useEffect/HookCounterOne";
import HookMouse from "./useEffect/HookMouse";
import MouseContainer from "./useEffect/MouseContainer";
import IntervalHookCounter from "./useEffect/IntervalHookCounter";
import DataFetching from "./useEffect/Fetching data with useEffect hook/DataFetching";
import DataFetching2 from "./useEffect/Fetching data with useEffect hook/DataFetching2";
import DataFetching3 from "./useEffect/Fetching data with useEffect hook/DataFetching3";
function App() {
	return (
		<div className="App">
			{/* <Counter1 /> */}
			{/* <HookCounterOne /> */}
			{/* <HookMouse /> */}
			{/* <MouseContainer /> */}
			{/* <IntervalHookCounter /> */}
			{/* <DataFetching /> */}
			{/* <DataFetching2 /> */}
			<DataFetching3 />
		</div>
	);
}

export default App;
