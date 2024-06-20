import React from "react";

class ComponentB extends React.Component{
    constructor (){
        super();
        this.state = {
            name: "ComponentB"
        }

        console.log("ComponentB Constructor");
    }

    static getDerivedStatesFromProps(){
        console.log("ComponentB getDerivedStatesFromProps()");
        return null;
    }

    componentDidMount(){
        console.log("ComponentB componentDidMount");
    }
    render(){
        console.log("ComponentB Render");
        return(<h1>ComponentB</h1>);
    }
}

export default ComponentB;