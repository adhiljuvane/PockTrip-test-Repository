import React from 'react';
import "./Login.css";
import "./Mobile.css";

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            location: "",
            login: false,
        }
    }

    onInputChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onLogin = () => {
        localStorage.setItem("name", this.state.name);
        localStorage.setItem("email", this.state.email);
        localStorage.setItem("location", this.state.location);
        this.setState({
            name: "",
            email: "",
            location: ""
        })
    }

    render() {
        return (
            <div className="login">
                <div className="columnOne">
                    <h2>Continue without Login</h2>
                    <input placeholder="Full Name" value={this.state.name} id="name" onChange={this.onInputChange} />
                    <input placeholder="Email" value={this.state.email} id="email" onChange={this.onInputChange} />
                    <input placeholder="Location" value={this.state.location} id="location" onChange={this.onInputChange} />
                    <button onClick={this.onLogin}>Comment as guest</button>
                </div>
                <div className="columnTwo">
                    <div style={{ backgroundColor: "white", height: "16vw", width: "1px" }}></div>
                </div>
                <div className="columnThree">
                    <h2>
                        Please Login To Join The Conversation.
                    </h2>
                </div>
            </div>
        )
    }
}

export default Login;