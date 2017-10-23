import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import {Childnode} from './basicchildNode';


export class HelloPlanet extends React.Component {
    constructor(props){
		super(props);
		this.state = {
		     counter: 0
		};
		/* setInterval(()=> {
	         this.setState({counter: this.state.counter +1 })  	
	 },1500); */
		this.updateThisCounter = this.updateThisCounter.bind(this);
	}
	updateThisCounter(){
		this.setState({counter: this.state.counter + 1});
	}
	render() {
	   console.log(this.props);
	    /* Object Calling	
		/* states Counter
	    /* numbers Define and Validation using Props Type */
		return <div>
			    <h1>Hey you are on {this.props.myObj.code}</h1>
			    <h1>Hey! your fav no. is {this.state.counter}</h1>
			    <h1>Hey you are on {this.props.num}</h1>
				<button onClick={this.updateThisCounter}>update the counter</button>
                <Childnode triggerParentUpdate={this.updateThisCounter}/>
			</div>
	}
}	
	
HelloPlanet.propTypes = {
	num: PropTypes.number
};
HelloPlanet.defaultProps = {
  num : 10
};
 

	