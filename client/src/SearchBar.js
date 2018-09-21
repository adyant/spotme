import React, {Component} from 'react';


class SearchBar extends Component {
	constructor(props){
		super(props);
		this.state = {term:''};

	}

	/*handleKeyPress = (event) => {
		var keyCode = event.which || event.keyCode;
		if ((event.key==='Enter' || keyCode===13) && this.state.value!=''){
			console.log('Enter Key Pressed');
			this.props.onSearchTermChange(this.state.term);
		}


	}*/

	exampleApiCall = (e) => {
		var keyCode = e.which || e.keyCode;
		if ((e.key==='Enter' || keyCode===13) && this.state.value!==''){
			console.log('API call: ' + this.state.term);
		}

	}

	render(){
		return (
			<div className="search-bar">
			<input 
				value={this.state.term} 
				onChange={(event)=> this.onInputChange(event.target.value)}
				onKeyPress={(event)=> this.exampleApiCall(event.target.value)} />
			</div>
			);
	}

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }


}

export default SearchBar;