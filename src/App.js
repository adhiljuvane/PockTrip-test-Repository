import React from 'react';
import './App.css';

import Login from "./components/Login/Login";
import Navbar from "./components/NavBar/NavBar";
import Comment from "./components/Comment/Comment";
import AllComments from "./components/AllComments/AllComments";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messageList: [],
    }
  }

  componentDidMount() {
    this.setState({
      messageList: localStorage.messageList ? JSON.parse(localStorage.messageList) : [],
    })
  }

  onSendMessage = () => {
    var messageList = this.state.messageList;
    var d = {
      name: localStorage.name,
      email: localStorage.email,
      location: localStorage.location,
      message: localStorage.message,
      hour: new Date().getHours(),
      minute: new Date().getMinutes(),
      second: new Date().getSeconds()
    }
    messageList.push(d);
    this.setState({
      messageList: messageList,
    }, () => {
      console.log("messageList", this.state.messageList);
    })
    localStorage.setItem("messageList", JSON.stringify(this.state.messageList));
  }

  render() {
    return (
      <div className="App">
        <Navbar messageList={this.state.messageList} />
        <div>
          <Comment onSendMessageCallback={this.onSendMessage} />
          <Login />
          <div style={{ padding: "1vw", width: "98vw" }}>
            Please refrain from posting comments that are obscene , defamatory or inflamatory , and do not indulge in personal attacks , name calling or inciting hatred against any community.Help us delete comments that do not follow these guidlines by marking them offensive. Let's work together to keep the conversation civil.
          </div>
          <AllComments messageList={this.state.messageList} />
        </div>
      </div >
    );
  }
}

export default App;
