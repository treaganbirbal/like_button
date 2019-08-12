import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      count: 0
    }
  }

  componentDidMount(){
    let numOfLikes = localStorage.getItem("likes")
    console.log(typeof(numOfLikes))
    if(!numOfLikes){
      localStorage.setItem("likes", this.state.count)
    } else {
      this.setState({
        count: (numOfLikes)
      })
    }
  }

  incrementLikes = () => {
    this.setState({
      count: this.state.count + 1
    })
    localStorage.setItem("likes", this.state.count + 1)
  }

  decrementLikes = () => {
    this.setState({
      count: this.state.count - 1
    })
    localStorage.setItem("likes", this.state.count - 1)
  }

  render(){
    const {count} = this.state
    return(
      <div className='App'>
        <button className='like-btn' onClick={this.incrementLikes}>Like</button>
        <button className='dislike-btn' onClick={this.decrementLikes}>Dislike</button>
        <br/>
        {count}
      </div>
    )
  }
}



export default App;
