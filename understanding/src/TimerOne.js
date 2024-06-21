import React from "react";

export default class TimerOne extends React.Component{
constructor(){
    super();
    console.log("TimerOne constructor");
    this.state = {count: 0}
}

static getDerivedStateFromProps(){
console.log("TimerOne getDerivedStateFromProps");
return null;
}

shouldComponentUpdate(){
    return true;
}
btnclick=()=>{
    this.setState((prevState)=>{
        return {count:prevState.count+1}})
    }
render(){
    console.log("TimerOne Render");
    return (<>
    <h1>{this.state.count}</h1>
    <button onClick={this.btnclick}>Increase</button></>);
}


componentDidMount()
{
console.log("TimeOne componentDidMount");
console.log("_____________________________________________________");
}

getSnapshotBeforeUpdate(prevProps, prevState)
{
    console.log("TimeOne getSnapshotBeforeUpdate");
    return null;
}

componentDidUpdate(){
    console.log("TimeOne componentDidUpdate");
    console.log("_____________________________________________________");
}
 
}

