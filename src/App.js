import React from "react"
import './App.css';
import Meme from "./Meme"

class App extends React.Component {
constructor(){
  super()
  this.state = {
    randomNum: Math.floor(Math.random() * 100)
  }
}

randomNumberGenerator = () => {
  const randomNum = Math.floor(Math.random() * 100)
  this.setState({
    randomNum
  })
}

render(){
    return (
      <div className="App">
        <Meme randomNum={this.state.randomNum}/>
        <button onClick={this.randomNumberGenerator}>Refresh</button>
      </div>
    );
  }
}


export default App;
