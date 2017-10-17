var React = require('react');
var reactDom = require('react-dom');
import Bacon from "../Components/Layout";

/*** Simple Render *****/
reactDom.render(<h4>Render Element</h4>,document.getElementById('example'));
const js = require('jquery');
js('#target').html('fghghReact Goess sss on!!!!!!!!!!!!!!');
/*** Created Simple Component *****/

const app2 = document.getElementById('example2');
reactDom.render(<Bacon/>,app2);
