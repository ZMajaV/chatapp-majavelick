import { Component } from "react";
import React from "react";

/*The component will receive the messages it should display as a prop from the App component. We'll render a list containing each message. The list items themselves will contain the sender's name and avatar, as well as the text of the message. This will render the JSX for each individual message. */


class Messages extends Component {

	render() {
		const { messages } = this.props;
		return (
			<ul className="Messages-list">
				{messages.map(m => this.renderMessage(m))}
			</ul>
		);
	};

	renderMessage(message) {
		const { member, text } = message;
		const { currentMember } = this.props;
		const messageFromMe = member.id === currentMember.id;
		const className = messageFromMe ?
			"Messages-message currentMember" : "Messages-message";
		return (
			<li className={className}>
				<span
					className="avatar"
					style={{ backgroundColor: member.clientData.color }}
				/>
				<div className="Message-content">
					<div className="username">
						{member.clientData.username}
					</div>
					<div className="text">{text}</div>
				</div>
			</li>

		);
	};
}

export default Messages;
