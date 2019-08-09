import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      count: 0,
    }
  }

  componentDidMount(){
    let numLikes = localStorage.getItem("likes")
    if(!numLikes){
      localStorage.setItem('likes', this.state.count)
    } else {
      this.setState({
        count: Number(numLikes)
      })
    }
  }

  incrementLike = (event) => {
    // let newCount = this.state.count;
    console.log('clicked')
    this.setState({
      count: this.state.count + 1 
    })
    localStorage.setItem('likes', this.state.count + 1)
  }

  decrementLike = (event) => {
    // let newCount = this.state.count;
    console.log('clicked')
    this.setState({
      count: this.state.count - 1
    })
    localStorage.setItem('likes', this.state.count - 1)
  }
                  
  render(){
    const {count} = this.state;
    return(
      <div className='app'>
        <button className='dislike' onClick={this.incrementLike}>LIKE</button>
        <br/>
        <button className='dislike' onClick={this.decrementLike}>DISLIKE</button>
        {count}
      </div>
    )
  }
}



export default App;
