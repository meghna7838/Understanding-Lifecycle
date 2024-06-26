import React from "react";
import ComponentB from "./ComponentB";

class ComponentA extends React.Component{
    constructor(){
        super();
        this.state= {
            name:"ComponentA",
            data:[]
        }

        console.log("ComponentA Constructor");
        
    }
    static getDerivedStateFromProps(){
        console.log("ComponentA getderivedstatefromprops()");
        return null;
    }

    componentDidMount(){
        console.log("ComponentA componentDidMount");
        let users =fetch('https://jsonplaceholder.typicode.com/user')
        .then((response)=>{return response.json()})
        .then((user)=>{this.setState({data:user})});
    
        
    }
    render(){
        
        console.log("ComponentA Render");
        return(
            <>
            <h1>{this.state.name}</h1>
            
            <ul>
            {this.state.data.map((d)=>{
                return (<li>{d.username}</li>);
                })}
            </ul>

            {/* <table>
                {this.state.data.map((user)=>{
                    return (<tr>
                        <td>{user.id}</td>
                        <td>{user.username}</td>
                    </tr>)
                })}
            </table> */}
            </>
        );
    }
}

export default ComponentA;