const React = require('react');
var transparentBg = require('../styles').transparentBg;
var Prompt = require ('../components/Prompt');

const PromptContainer = React.createClass({
	contextTypes: {//don't use this too much outside of react-router, b/c it doesn't scale well
		router: React.PropTypes.object.isRequired
	},
	getInitialState: function () {
		return {
			username: ''
		}
	},
	handleUpdateUser: function (e) {
		this.setState({
			username: e.target.value
		})
	},
	handleSubmitUser: function (e) {
		e.preventDefault();
		var username = this.state.username; {/*cache the username so if someone clicks the back button they won't get the old username that was there.*/}
		this.setState({
			username: ''
		});

		if (this.props.routeParams.playerOne) {
			this.context.router.push({
				pathname: '/battle',
				query: {
					playerOne: this.props.routeParams.playerOne,
					playerTwo: this.state.username
				}
			})
			// go to /battle
		} else {
			this.context.router.push('/playerTwo/' + this.state.username)
			//go to /playerTwo
		}
	},
	render: function () {
		return (
			<Prompt
				onSubmitUser={this.handleSubmitUser}
				onUpdateUser={this.handleUpdateUser}
				header={[]}
				username={this.state.username} />
		)
	}
});

module.exports = PromptContainer;