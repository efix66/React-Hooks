import React from "react";

import "./App.css";
// import Counter1 from "./useReducer/Counter1";
// import HookCounterOne from "./useEffect/HookCounterOne";
// import HookMouse from "./useEffect/HookMouse";
// import MouseContainer from "./useEffect/MouseContainer";
// import IntervalHookCounter from "./useEffect/IntervalHookCounter";
// import DataFetching from "./useEffect/Fetching data with useEffect hook/DataFetching";
// import DataFetching2 from "./useEffect/Fetching data with useEffect hook/DataFetching2";
// import DataFetching3 from "./useEffect/Fetching data with useEffect hook/DataFetching3";
// import ComponentC from "./useContext/Context old way/ComponentC";
// import ContextB from "./useContext/useContext hook/ContextB";
// import Component1 from "./useContext/UseContext3/Component1";
import UserContext2 from "./useContext/UseContext4/UserContext2";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

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
			{/* <DataFetching3 /> */}
			{/* <UserContext.Provider value={"Felix"}>
				<ChannelContext.Provider value={"Learning React"}>
					<ComponentC />
				</ChannelContext.Provider>
			</UserContext.Provider> */}

			{/* <UserContext.Provider value={"Felix"}>
				<ChannelContext.Provider value={"Learning Hooks"}>
					<ContextB />
				</ChannelContext.Provider>
			</UserContext.Provider> */}
			{/* <Component1 /> */}
			<UserContext2 />
		</div>
	);
}

export default App;
