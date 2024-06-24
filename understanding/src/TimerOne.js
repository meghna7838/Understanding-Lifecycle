import React from "react";

export default class TimerOne extends React.Component{
constructor(){
    super();
    console.log("TimerOne constructor");
    this.state = {time: 0}
    this.timer=null;
}

static getDerivedStateFromProps(){
console.log("TimerOne getDerivedStateFromProps");
return null;
}

shouldComponentUpdate(){
    return true;
}

render(){
    console.log("TimerOne Render");
    return (<>
    <h1>Timer:{new Date(this.state.time*1000).toISOString().slice(11,19)}</h1>
    </>);
}


componentDidMount()
{
console.log("TimeOne componentDidMount");
console.log("_____________________________________________________");

// this.timer = setInterval(()=>{
//         this.setState({time:time+1});
//     },1000);


}

getSnapshotBeforeUpdate(prevProps, prevState)
{
    console.log("TimeOne getSnapshotBeforeUpdate");
    return null;
}

componentDidUpdate(prevProps,prevState,snapshot){
    console.log("TimeOne componentDidUpdate");
    console.log("_____________________________________________________");
    console.log("PrevProp",prevProps);
    console.log("PrevState",prevState);
    console.log("SNapshot from getSnapshotBeforeUpdate",snapshot)
    // this.timer = setInterval(() => {
    //     this.setState((prevState) => ({ time: prevState.time + 1 }));
    //   }, 1000); Wrong way timer will behave weird

    //Right Way
    if(prevProps.start !== this.props.start)
        {
            if(this.props.start)
                { this.timer = setInterval(() => {
                    this.setState((prevState) => ({ time: prevState.time + 1 }));
                  }, 1000);
                }
            else{
                clearInterval(this.timer);
            }

        }
}

componentWillUnmount(){
    console.log("TimerOne Unmounted");
}
}
 

