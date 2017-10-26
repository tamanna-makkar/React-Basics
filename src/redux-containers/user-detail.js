import React from 'react';
import ReactDom from 'react-dom';
import {connect} from 'react-redux';


class UserDetail extends React.Component {
	render() {
		return(
			<div>
				 <h2>{this.props.user.firstName}{this.props.user.lastName}</h2>
				 <h3>{this.props.user.age}</h3>
			     <h4>{this.props.user.desc}</h4>
			</div>
		);
	}
}
function mapStateToProps(state) {
	return {
		user: state.activeUser
	};
}
export default connect(mapStateToProps)(UserDetail);