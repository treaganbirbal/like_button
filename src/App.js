import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      count: 0,
    }
  }

  componentDidMount = () => {
    let numOfLikes = localStorage.getItem('likes')
    if(!numOfLikes){
      localStorage.setItem('likes', this.state.count)
    } else {
      this.setState({
        count: Number(numOfLikes)
      })
    }
  }

  
  render(){
    const { count } = this.state;
    return (
      <div className="App">
        {count}
        <button className='like-button' onClick={this.handleIncrementLike}>Like</button>
        <button className='dislike-button' onClick={this.handleDecrementLike}>Dislike</button>
      </div>
    )
  }
}

export default App;
