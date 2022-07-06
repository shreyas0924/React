import React from "react";
import ReacDom from "react-dom";


class App extends React.Component{
    //SPECIFIC TO JS NOT REACT
    //We initialize state using constructor
    constructor(props){
        super(props);

        this.state = {lat : null, errorMessage : ''}; // We still don't know the value of lattitude so we;ll default the value to null.
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                //we called setstate to automatically update our state value
                this.setState({lat : position.coords.latitude})
            } ,
            (err) => {
                this.setState({errorMessage : err.message   })
            }
        );

    }

    //WE HAVE TO DEFINE RENDER OR ELSE IT'LL THROW AN ERROR
    render(){

        // conditional rendering
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
        }

        if(this.state.lat && !this.state.errorMessage){
            return <div>Latitude: {this.state.lat}</div>
        }

        return <div>Loading</div>
       
        // return(
        //     <div> 
        //         Latitude: {this.state.lat}
        //         <br />
        //         Error : {this.state.errorMessage}
        //     </div>
    
        // );
    }
};

ReacDom.render(<App />, document.querySelector('#root'));


