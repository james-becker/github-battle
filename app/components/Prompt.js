var React = require('react');
var transparentBg = require('../styles').transparentBg;
var PropTypes = React.PropTypes;

//functional stateless components

function Prompt (props) {//all this component has is render and propTypes. So we can use stateless components for this. This can often be done with components that are presentational. Business logic components can still be components with state, but it's nice to have this differentiation—it's just another way to categorize our functions into two types: functions with state (logic components) and stateless functions (presentational components).
		return (
		<div className='jumbotron col-sm-6 col-sm-offset-3 text-center' style={transparentBg}>
			<h1>{props.header}</h1>
			<div className="col-sm-12">
				<form onSubmit={props.onSubmitUser}>
					<div className="form-group">
						<input
							className='form-control'
							placeholder='Github Username'
							onChange={props.onUpdateUser}
							value={props.username}
							type='text' />
					</div>
					<div className='form-group col-sm-4 col-sm-offset-4'>
						<button
							className='btn btn-block btn-success'
							type='submit'>
							Continue
						</button>
					</div>
				</form>
			</div>
		</div>
		)
};

Prompt.propTypes = {//we've now separated propTypes from the presentational component.
		header: PropTypes.string.isRequired, // make sure it's a string
		onUpdateUser: PropTypes.func.isRequired,
		onSubmitUser: PropTypes.func.isRequired,
		username: PropTypes.string.isrequired
	},
};


module.exports = Prompt;