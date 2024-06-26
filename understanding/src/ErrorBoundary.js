import React from "react";

export default class ErrorBoundary extends React.Component{

constructor(){
    super();
    this.state = {
        hasError :false
    }
}
static getDerivedStateFromError(error)
{
    return { hasError:true};
}

componentDidCatch(error,info)
{
    console.log("Error:",error);
    console.log("ErrorInfo:",info);
}
render(){
    if(this.state.hasError)
        {
            return <h1>Something is wrong please contact admin</h1>
        }

        return this.props.children;
}
}