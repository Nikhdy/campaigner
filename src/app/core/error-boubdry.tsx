import * as React from 'react';

class ErrorBoundry extends React.Component<{children: any},{hasError: boolean} >{
    constructor(props){
        super(props);
        this.state={
            hasError: false,
        }
    }

 static getDerivedStateFromError = (error) =>{
    return {hasError: true}
 }
 render(){
    if(this.state.hasError){
        return <h1>Something went wrong</h1>
    }
    return this.props.children;
 }
}

export default ErrorBoundry