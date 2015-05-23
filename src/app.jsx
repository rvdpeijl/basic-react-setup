var React = require('react/addons');

var App = React.createClass({
	render() {
		return (
			<h1>Hello world!</h1>
		);
	}
});

React.render(<App/>, document.body);