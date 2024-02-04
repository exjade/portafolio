import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';


const Home = lazy(() => import('./pages/home'));
const About = lazy(() => import('./pages/about-me'));
const Projects = lazy(() => import('./pages/projects'));
const NotFound = lazy(() => import('./pages/not-found'))


function App() {
  return (
    <Router>
      <Suspense fallback={<div>...</div>} >
        <Routes>
            <Route path={ROUTES.HOME} element={<Home />} exact/>
            <Route path={ROUTES.ABOUT} element={<About />} exact/>
            <Route path={ROUTES.PROJECTS} element={<Projects />} exact/>
            <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
