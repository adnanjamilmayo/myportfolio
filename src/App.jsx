import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Homepage from './pages/Homepage'
import About from './pages/About'
import Projects from './pages/Projects'
import Blog from './pages/Blog'
import AI from './pages/AI'
import Lab from './pages/Lab'
import Readings from './pages/Readings'
import Uses from './pages/Uses'
import NotFound from './pages/404'
import { useEffect, useState } from 'react';
import { createContext } from 'react';

export const AppContext = createContext();

function App() {
	const savedTheme = localStorage.getItem("theme");
    const [theme, setTheme] = useState(savedTheme || "dark");

	useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");

        localStorage.setItem("theme", theme);
    }, [theme]);

	const switchTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

	return (
		<AppContext.Provider value={{ theme, switchTheme }}>
			<BrowserRouter
				future={{
					v7_startTransition: true,
					v7_relativeSplatPath: true
				}}
			>
				<Routes>
					<Route path='/' element={<Homepage />} />
					<Route path="about" element={<About />} />
					<Route path="projects" element={<Projects />} />
					<Route path="blog" element={<Blog />} />
					<Route path="ai" element={<AI />} />
					<Route path="lab" element={<Lab />} />
					<Route path="readings" element={<Readings />} />
					<Route path="uses" element={<Uses />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</AppContext.Provider>
	)
}

export default App
