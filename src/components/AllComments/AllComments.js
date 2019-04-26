import React from "react";
import "./AllComments.css";

import CommentBox from "./CommentBox/CommentBox";

class AllComments extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            messageList: [],
        }
    }

    componentDidMount() {
        this.setState({
            messageList: this.props.messageList,
        })
    }

    componentWillReceiveProps = (newProps) => {
        this.setState({
            messageList: newProps.messageList ? newProps.messageList : this.state.messageList,
        })
    }

    render() {
        return (
            <div>
                {this.state.messageList ? (this.state.messageList.reverse().map((item, index) => {
                    return <CommentBox key={index} name={item.name} email={item.email} location={item.location} message={item.message} hour={item.hour} minute={item.minute} second={item.second} />
                })) : (null)}
            </div>
        )
    }
}

export default AllComments;