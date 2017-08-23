import React from 'react';
import ReactDOM from 'react-dom';

// IMPORTANT!!!! uncomment the lines below to make your tests work

const meInReact =
	React.createElement('div', { class: 'me' },
  	React.createElement('h1', {}, 'An Awesome Person'),
  	React.createElement('p', {}, 'Who is learning React'),
    React.createElement('br'),
		React.createElement('ul', { class: 'me_interests' }
		[
			React.createElement('li', {}, 'Javascript'),
			React.createElement('li', {}, 'React'),
			React.createElement('li', {}, 'Movies'),
			React.createElement('li', {}, 'Ice Cream')
		])
);

// ReactDOM.render(meInReact, document.getElementsByClassName('root'));
ReactDOM.render(
	meInReact,
	document.getElementById('root')
);

//export default meInReact
