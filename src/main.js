/**
 * Created by Wes on 8/15/2016.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';

document.addEventListener('DOMContentLoaded', function() {

	ReactDOM.render(
		<Counter />, /* preferred syntax over React.createElement(Counter) */
		document.getElementById('mount')
	)
});