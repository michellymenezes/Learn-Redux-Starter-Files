// let's go!
import React from 'react';

import { render } from 'react-dom';

// import css
import css from './styles/style.styl';


// import components 
import Main from './components/Main';
import Task from './components/Task';
import TaskList from './components/TaskList';

// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const router = (
	<Router history={browserHistory}>
		<Route path="/" component={Main}>
			<IndexRoute component={TaskList}></IndexRoute>
			<Route path="/view/:taskId" component={Task}></Route>
		</Route>
	</Router>
)

render(
	router,
	document.getElementById('root')
);