import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import AdminFeature from './features/Admin';
import AuthFeature from './features/Auth';
import ExamFeature from './features/Exam';
import HomeFeature from './features/Home';
import ManageExamFeature from './features/ManageExam';
import UserFeature from './features/User';

function App() {
	return (
		<div className="">
			<Header />
			<div className="min-h-[76vh]">
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
