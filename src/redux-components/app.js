import React from 'react';
import ReactDom from 'react-dom';
import Userlist from '../redux-containers/user-list';
import UserDetail from '../redux-containers/user-detail';

export default class App extends React.Component{
    render(){
		return (
			<div>
			    <h1>*********** User Details Using Redux **********</h1>
				<h2>Username :</h2>
			    <Userlist></Userlist>
				<hr/>
				<h2>UserDetails :</h2>
                <UserDetail></UserDetail> 
			</div>
		);
	}
}
