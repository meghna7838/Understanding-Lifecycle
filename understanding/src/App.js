import React from "react";
import ComponentA from "./ComponentA";
import TimerOne from "./TimerOne"
class  App extends React.Component {
  constructor(){
    super();
    this.state =  {
      mount : false
    }
  }
  handleClick=()=>{
    this.setState((prevState)=>({ mount:!prevState.mount
    }))
  }
  render(){
    return(<>
      <button onClick={this.handleClick}>{this.state.mount?"UNMOUNT":"MOUNT"}</button>
      {this.state.mount?<TimerOne/>:null}
      </>
    );
  }
}

export default App;
