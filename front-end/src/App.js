import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import ExamFeature from './features/Exam';
import AuthFeature from './features/Auth';
import HomeFeature from './features/Home';
import UserFeature from './features/User';
import ManageExamFeature from './features/ManageExam';

function App() {
	return (
		<div>
			<Header />
			<div className="min-h-[97.5vh]">
				<Routes>
					<Route path="/" element={<HomeFeature />} />
					<Route path="user/*" element={<UserFeature />} />
					<Route path="exam/*" element={<ExamFeature />} />
					<Route path="manageexam/*" element={<ManageExamFeature />} />
					<Route path="auth/*" element={<AuthFeature />} />
					<Route path="admin/*" element={<AdminFeature />} />
				</Routes>
			</div>

			<Footer />
		</div>
	);
}

export default App;
