import React from "react";
import ComponentA from "./ComponentA";
import TimerOne from "./TimerOne"
class  App extends React.Component {
  constructor(){
    super();
    this.state =  {
      start : false
    }
  }
  handleClick=()=>{
    this.setState((prevState)=>({ start:!prevState.start
    }))
  }
  render(){
    return(<>
      <button onClick={this.handleClick}>{this.state.start?"STOP":"START"}</button>
      <TimerOne start={this.state.start}/>
      </>
    );
  }
}

export default App;
