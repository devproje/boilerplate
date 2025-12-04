import { BrowserRouter, Route, Routes } from "react-router";
import Home from "@/pages/home";
import "./App.scss";
import GeneralLayout from "@/components/layout/general-layout";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<GeneralLayout />}>
					<Route path="/" element={<Home />} index></Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
