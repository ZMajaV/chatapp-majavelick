import { Component } from "react";
import React from "react";

/*This component will have a text field to enter the message and a button to send it. We'll keep track of the currently entered text in our state. */

class Input extends Component {
    state = {
        text: ""
    }
    //Whenever the textfield's value changes, we'll update our state to match. This will trigger a render whenever the text field changes. 
    onChange(e) {
        this.setState({ text: e.target.value });
    }
    /*We need to handle sending the message. To send the message we'll use a callback inside the component's props which we'll receive from App. We need to prevent the default behavior so our app doesn't refresh every time a new message is sent. We'll also update the state so that we clear the textfield. */
    onSubmit(e) {
        e.preventDefault();
        this.setState({ text: "" });
        this.props.onSendMessage(this.state.text);
    }

    render() {
        return (
            <div className="Input">
                <form onSubmit={e => this.onSubmit(e)}>
                    <input
                        onChange={e => this.onChange(e)}
                        value={this.state.text}
                        type="text"
                        placeholder="Enter your message and press ENTER"
                        autofocus="true"
                    />
                    <button>Send</button>

                </form>

            </div>
        );
    };
};

export default Input;