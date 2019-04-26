import React from "react";
import "./CommentBox.css";

import { Icon } from "antd";
import UserIcon from "../../../resources/user.png"

class CommentBox extends React.Component {
    render() {
        return (
            <div className="commentBox">
                <div className="rowOne">
                    <div style={{ display: "flex", flexDirection: " row" }}>
                        <img src={UserIcon} alt="" className="userIcon" />
                        <div>
                            <div>{this.props.name}</div>
                            <div style={{ display: "flex", flexDirection: "row", margin: "0.25vw 0vw" }}>
                                <div>{this.props.name}.</div>
                                <div>{this.props.location}.</div>
                                <div>Time : {this.props.hour}:{this.props.minute}:{this.props.second}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rowTwo">
                    {this.props.message}
                </div>
                <div className="rowThree">
                    <div style={{ display: "flex", flexDirection: "row", width: "20vw", justifyContent: "space-between", alignItems: "center" }}>
                        <div>REPLY</div>
                        <div>16  <Icon type="like" /></div>
                        <div>7  <Icon type="dislike" /></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CommentBox;