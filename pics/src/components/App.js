import React from "react";
import  ReactDOM  from "react-dom";
import SearchBar from './SearchBar';


class App extends React.Component {

  onSearchSubmit(term) {
    console.log(term);
  } 


  render(){
    return(
      <div className="ui container" style={{marginTop : '20px'}}>
      
        <SearchBar onSubmit = {this.onSearchSubmit} />
      </div>
    );
  }
}
  
export default App;
  