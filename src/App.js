import React, { Component } from 'react';

import Cards from './Components/Cards'
import Header from './Components/Header'
import Scroll from './Components/Scroll'


class App extends Component {
	constructor(){
		super();
		this.state = {
			robots: [],
			searchfield: ''
		}
	}
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => {
				return response.json();
			})
			.then(users => {
				this.setState({robots : users})
			})
		
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
				<Scroll>
					<Cards robots={filteredRobots}/>
				</Scroll>
			</div>
		);
	}
}

export default App;