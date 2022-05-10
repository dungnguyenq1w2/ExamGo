import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import ExamFeature from './features/Exam';
import AuthFeature from './features/Auth';
import HomeFeature from './features/Home';
import UserFeature from './features/User';

function App() {
	return (
		<div>
			<Header />
			<div className="min-h-[97.5vh]">
				<Routes>
					<Route path="/" element={<HomeFeature />} />
					<Route path="user/*" element={<UserFeature />} />
					<Route path="exam/*" element={<ExamFeature />} />
					<Route path="auth/*" element={<AuthFeature />} />
				</Routes>
			</div>

			<Footer />
		</div>
	);
}

export default App;
