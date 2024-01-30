import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';

const Home = lazy(() => import('./pages/home'));
const About = lazy(() => import('./pages/about-me'));
const Projects = lazy(() => import('./pages/projects'));
const NotFound = lazy(() => import('./pages/not-found'))


function App() {
  return (
    <Router>
      <Suspense fallback={<div>...</div>} >
        <Switch>
            <Route path={ROUTES.HOME} component={Home} exact/>
            <Route path={ROUTES.ABOUT} component={About} exact/>
            <Route path={ROUTES.PROJECTS} component={Projects} exact/>
            <Route path="*" component={NotFound} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
