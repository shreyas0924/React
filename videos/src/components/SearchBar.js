import React from "react";

class SearchBar extends React.Component {

    state = {term : ''};

    onInputChange = (event) => {
        this.setState({term : event.target.value});
    };

    onFormSubmit = (event) => {
        event.preventDefault();

        // TO do : Make sure we call callbadk from parent component
        this.props.onFormSubmit(this.state.term);
    }

    render() {
        return(
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label >Video Search</label>
                        <input 
                            onChange={this.onInputChange}
                            type="text" 
                            value={this.state.term}>
                        </input>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;