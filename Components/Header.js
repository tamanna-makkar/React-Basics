var React = require('react');
var reactDom = require('react-dom');
import Title from './Title';

export default class Header extends React.Component{
  render() {
  	return (
		<div>
		  <header>Header Element</header>
	
		  <Title/>
		</div>
	); 
  }
}
