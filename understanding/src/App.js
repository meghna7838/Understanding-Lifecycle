import React from "react";
import ComponentA from "./ComponentA";
import TimerOne from "./TimerOne"
import ErrorBoundary from "./ErrorBoundary";
import ComponentB from "./ComponentB";
class  App extends React.Component {
  
  render(){
    return(<>
      <ErrorBoundary>
        <ComponentA/>
       
      </ErrorBoundary>
      <ErrorBoundary>
      <ComponentB />
      </ErrorBoundary>
      </>
    );
  }
}

export default App;
