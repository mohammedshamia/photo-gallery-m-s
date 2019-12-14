import React from 'react';

import {ErrorImageContainer, ErrorImageOverlay, ErrorImageText } from './error-boundary.styles';

class ErrorBoundary extends React.Component{
    constructor(props){
        super(props);
        this.state={
            hasErrored:false
        }
    }

    static getDerivedStateFromError(error){
        return {hasErrored: true}
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
    }

    render() {
        if(this.state.hasErrored)
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl='https://i.imgur.com/yW2W9SC.png'/>
                    <ErrorImageText>This Page is Broken</ErrorImageText>
                </ErrorImageOverlay>
            );
        return this.props.children;
    }
}

export default ErrorBoundary;