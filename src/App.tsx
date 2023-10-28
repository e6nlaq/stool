
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { RandomPage } from './component/random_page';
import { HomePage } from './component/home_page';

function App() {

	return (
		<>
			<div className="header">
				<a href="/">STool</a>
			</div>

			<br />

			<BrowserRouter>
				<HelmetProvider>
					<Routes>
						<Route path='/' element={<HomePage />} />
						<Route path="/random" element={<RandomPage />} />
					</Routes>
				</HelmetProvider>

			</BrowserRouter>

			<a className="pagetop" href="#"><div className="pagetop__arrow"></div></a>
		</>
	)
}

export default App
