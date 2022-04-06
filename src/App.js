import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ExamFeature from "./features/Exam";
import HomeFeature from "./features/Home";
import UserFeature from "./features/User";

function App() {
	return (
		<div>
			<Header />
			<div className="body">
				<Routes>
					<Route path="/" element={<HomeFeature />} />
					<Route path="user/*" element={<UserFeature />} />
					<Route path="exam" element={<ExamFeature />} />
				</Routes>
			</div>

			<Footer />
		</div>
	);
}

export default App;
