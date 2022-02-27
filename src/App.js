
import './App.css';
import BookLists from './pages/BookLists';
import Header from './components/Header/Header';
import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";
import ReadingLists from './pages/ReadingLists';

function App() {
	return (
		<BrowserRouter>
		<div className="App">
			<Header />
	
				<Routes>
					<Route path="/" element={<BookLists />}/>
					<Route path="/reading-lists" element={<ReadingLists/>}/>
				</Routes>
		</div>
		</BrowserRouter>
	);
}

export default App;
