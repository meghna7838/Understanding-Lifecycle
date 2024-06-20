import React from "react";
import ComponentB from "./ComponentB";

class ComponentA extends React.Component{
    constructor(){
        super();
        this.state= {
            name:"ComponentA"
        }

        console.log("ComponentA Constructor");
        
    }
    static getDerivedStateFromProps(){
        console.log("ComponentA getderivedstatefromprops()");
        return null;
    }

    componentDidMount(){
        console.log("ComponentA componentDidMount");
        
    }
    render(){
        
        console.log("ComponentA Render");
        return(
            <>
            <h1>{this.state.name}</h1>
            <ComponentB/>
            </>
        );
    }
}

export default ComponentA;