import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withAuthenticator } from 'aws-amplify-react';

const TextArea = ({ value, handleChange, handleSubmit }) => (
    <div>
        <br/>
        <form>
            <textarea
                name="sourceURL"
                placeholder="Source URL"
                value={value}
                onChange={handleChange}
            />
            <button onClick={handleSubmit}>Submit Test</button>
        </form>
        <br/>
    </div>
)

class UserInterface extends Component {
    constructor() {
        super();
        this.state = {
          value: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        this.setState({
          value: event.target.value
        });
    }
    
    handleSubmit() {
        let urlList = this.state.value.split(/\r?\n/);
        alert(urlList);
    }
    
    render() {
        return (
            <div>
                <TextArea 
                    value={this.state.value} 
                    handleChange={this.handleChange} 
                    handleSubmit={this.handleSubmit} 
                />
            </div>
        )
    }
}

export default withAuthenticator(UserInterface, true);