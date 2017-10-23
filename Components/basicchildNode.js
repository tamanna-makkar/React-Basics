import React from 'react';
import ReactDom from 'react-dom';
export class Childnode extends React.Component{
   constructor(props){
   	  super(props);
   }	
   render() {
   	  return <p>Button from child Node <button onClick={this.props.triggerParentUpdate}>Update here</button></p>
   }
}
