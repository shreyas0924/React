import React from "react";
import  ReactDOM  from "react-dom";


class SearchBar extends React.Component{

     
    state = {term : ''}

    render() {
        return(
            <div className="ui segment" >
                <form onSubmit = { (e) => e.preventDefault()}  className="ui form">
                    <div className="field">
                        <label style={{textAlign: 'center'}} >Image Search</label>
                        <input 
                            type="text" 
                            value={this.state.term}
                            onChange={ (e) => this.setState( {term : e.target.value})}>
                        </input>
                    </div>
                </form>
                
            </div>
        );
    }
};
  
export default SearchBar;