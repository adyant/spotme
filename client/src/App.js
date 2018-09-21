import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: null,
            trackData: "track"
        };
        this.trackSearch('');
    }




    componentDidMount() {
        // Call our fetch function below once the component mounts
      this.callBackendAPI()
        .then(res => this.setState({ data: res.express }))
        .catch(err => console.log(err));
    }

    callBackendAPI = async() => {
        const response = await fetch('/express_backend');
        const body = await response.json();

        if (response.status !== 200) {
            throw Error(body.message)
        }
        return body;
    };

    trackSearch= (term) =>{
        console.log("apicall for "+term);

    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1> 
                </header>
                <p className="App-intro">{this.state.data}</p>
                <div>
                    <SearchBar onSearchTermChange={this.trackSearch} />
                    <h2>{this.state.trackData}</h2>
                </div>
            </div>
        );
        }
}

export default App;
