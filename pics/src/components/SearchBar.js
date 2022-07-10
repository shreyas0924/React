import React from "react";
import  ReactDOM  from "react-dom";


class SearchBar extends React.Component{

     
    state = {term : ''}

    onFormSubmit = (e)=> {
        e.preventDefault();
        console.log(this.state.term);

        this.props.onSubmit(this.state.term);
    }

    render() {
        return(
            <div className="ui segment" >
                <form onSubmit = {(e) => this.onFormSubmit(e)}  className="ui form">
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