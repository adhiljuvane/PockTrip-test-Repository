import React from 'react';
import "./NavBar.css";
import "./Mobile.css";

class NavBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            numberOfMessages: 0
        }
    }

    componentDidMount = () => {
        var numberOfMessages = localStorage.messageList ? JSON.parse(localStorage.messageList).length : 0
        this.setState({
            numberOfMessages: numberOfMessages,
        })
    }


    componentDidMount() {
        var numberOfMessages = this.props.messageList ? JSON.parse(localStorage.messageList).length : 0
        this.setState({
            messageList: numberOfMessages,
        })
    }

    componentWillReceiveProps = (newProps) => {
        this.setState({
            messageList: newProps.messageList ? newProps.messageList : this.state.messageList,
        })
    }

    render() {
        return (
            <div className="navbar">
                <div>All Comments({this.state.numberOfMessages})</div>
                <div className="rightContent">
                    Comment Test
                </div>
            </div>
        )
    }
}

export default NavBar;