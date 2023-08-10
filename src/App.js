import React from 'react'
import Card from './Card'

import { robots } from './robots'
import CardList from './CardList'
import SearchBox from './SearchBox'
class App extends React.Component {
  state = {
    robots:[],
    searchField: ''
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ robots: users }))
  }
  onSearchChange =(e)=>{
     this.setState({
      searchField: e.target.value 
      
     })
  } 
   render() {
    const Filtered = this.state.robots.filter((robot) => {
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
     })
    return (
      <div>
        <h1>RoboFriends </h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={Filtered}/>
      </div>
    )
  }
}

export default App