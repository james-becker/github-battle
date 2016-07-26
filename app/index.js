var USER_DATA = {
	name: 'James Becker',
	username: 'james-becker',
	image: 'https://avatars1.githubusercontent.com/u/5620278?v=3&s=460'
}


const React = require('react');
const ReactDOM = require('react-dom');

const ProfilePic = React.createClass({
	render: function () {
		return (
			<img src={this.props.imageUrl} style={{height: 100, width: 100}}></img>
			)
	}
});

const ProfileLink = React.createClass({
	render: function () {
		return (
			<div>
				<a href={'https://www.github.com/' + this.props.username}>
					{this.props.name}
				</a>
			</div>
			)
	}
})

const ProfileName = React.createClass({
	render: function () {
		return (
			<div>{this.props.name}</div>
			)
	}
});

const Avatar = React.createClass({
	render: function () {
		return (
			<div>
				<ProfilePic imageUrl={this.props.user.image} />
				<ProfileName name={this.props.user.name} />
				<ProfileLink username={this.props.user.userid} />
			</div>
		);
	}
});

ReactDOM.render(
	<Avatar user={USER_DATA} />,
	document.getElementById('app')//keep this method in mind
);