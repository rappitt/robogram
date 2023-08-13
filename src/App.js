import React, { Component } from 'react';
import { robots } from './robots'
import Cards from './Components/Cards'
import Header from './Components/Header'


class App extends Component {
	constructor(){
		super();
		this.state = {
			robots: robots,
			searchfield: ''
		}
	}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value})
		
	}
	render(){
		const filteredRobots = this.state.robots.filter(robot =>{
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})
		return (
			<div>
				<Header onSearchChange={this.onSearchChange} />
				<Cards robots={filteredRobots}/>
			</div>
		);
	}
}

export default App;