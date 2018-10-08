import React, {Component} from 'react';

class MyTimer extends Component{
	constructor(props){
		super(props);
		this.state = {
			count : 0
		}
	}

	componentDidMount(){
		this.myInterval = setInterval(()=> {
			this.setState(prevState => ({
			  count: prevState.count + 1
			}))
		  }, 1000)
		console.log("le compteur commence")
	}

	componentDidUpdate(){
		console.log("un update à eu lieu");
	}

	render(){
		const {count} = this.state;
		return(
			<div>Count : {count}</div>
		);
	}
}

export default MyTimer