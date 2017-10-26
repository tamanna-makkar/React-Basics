import React from 'react';
import ReactDom from 'react-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from '../actions/index';

 
class Userlist extends React.Component{
  createListItems(){
     return this.props.users.map((user) => {
        return (
           <li key={user.id}
             onClick={() => this.props.selectUser(user)}
          >
              {user.firstName}{user.lastName}
          </li>    
        );
     });
  }
  UserDetails(){
     return this.props.users.map((user) => {
        return (
          <div className="user-details">
             {user.desc}{user.age}
          </div>  
        );
     });
  }
  render(){
  	 return(
	    <ul>
        {this.createListItems()}
       
		 </ul>
	 );
  }
}
function mapStateToProps(state) {
	return {
		users: state.users
	};
}
function matchDispatchToProps(dispatch){
  return bindActionCreators({selectUser: selectUser},dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(Userlist); 


