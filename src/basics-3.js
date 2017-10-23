import React from 'react';
import ReactDom from 'react-dom';
import {HelloPlanet} from '../Components/BasicsLayout';
/* function HelloPlanet(props){
   console.log(props); 
   return <h1>Hello {props.name}</h1>;
}*/
var obj = {
   code: 'Angular'
};
ReactDom.render(
  <div>

	<HelloPlanet name="Earth" haswifi="true" myObj={obj} num={12} />
  </div>,
	document.getElementById('firstapp')
);