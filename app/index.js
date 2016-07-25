const React = require('react');
const ReactDOM = require('react-dom');

const HelloWorld = React.createClass({
	render: function () {
		return (
			<div> Hello, React JS Program </div>
			)
	}
});

ReactDOM.render(
	<HelloWorld />,
	document.getElementById('app')
);