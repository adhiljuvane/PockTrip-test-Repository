import React from "react";
import "./Comment.css";
import "./Mobile.css";

import UserIcon from "../../resources/user.png"
import SendIcon from "../../resources/send-button.png"

class Comment extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            message: ""
        }
    }

    onInputChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    callBackFunction = () => {
        this.props.onSendMessageCallback();
    }

    onSendMessage = () => {
        this.setState({
            message: "",
        })
        localStorage.setItem("message", this.state.message);
        this.callBackFunction();
    }

    enterKey = e => {
        if (e.keyCode === 13) {
            this.onSendMessage();
        }
    };

    render() {
        return (
            <div className="comment-type">
                <div className="top">
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <img src={UserIcon} alt="" className="userIcon" />
                        <input id="message" placeholder="Leave a comment..." value={this.state.message} onChange={this.onInputChange} onKeyUp={this.enterKey} />
                    </div>
                    <img src={SendIcon} alt="" className="sendIcon" onClick={this.onSendMessage} />
                </div>
            </div>
        )
    }
}

export default Comment;