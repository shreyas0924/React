import React from "react";
import ReacDom from "react-dom";
import SeasonDisplay from "./SeasonDisplay"
import Loading from "./loading"
import "./seasonDisplay.css";



class App extends React.Component{
    state = { lat: null, errorMessage:''} ;
   componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
        position => this.setState({lat : position.coords.latitude}),
        err => this.setState({errorMessage : err.message})
    );
   }

    //WE HAVE TO DEFINE RENDER OR ELSE IT'LL THROW AN ERROR
    render(){

        // conditional rendering
        if(this.state.errorMessage && !this.state.lat){
            return <h1> <div className="errorMessage">Error: {this.state.errorMessage}</div> </h1>
        }

        if(this.state.lat && !this.state.errorMessage){
            return <SeasonDisplay lat={this.state.lat} />;  
            //We are taking property from the state on the app component and passing it as prop into the season display
            // We can take state from one component and pass it as prop down to the child.
            // If we call the setState, the component rerender itself but in addition the coomponent will also rerender any children that it is showing.
        }

        return <Loading />;
    }
};

ReacDom.render(<App />, document.querySelector('#root'));


