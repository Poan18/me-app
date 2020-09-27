import React from 'react';

const Message = ({ text, username, self }) => (
  <div className={'message' + (self ? ' message-self' : '')}>
    <div className='message-username'>{username}</div>
    <div className='message-text'>{text}</div>
  </div>
);

// The message window contains all the messages
export default class MessageWindow extends React.Component {
  constructor (props) {
    super(props);

    this.messageWindow = React.createRef();
  }
  componentDidUpdate () {
    // Everytime the component updates (when a new message is sent) we
    // change the `scrollTop` attribute to autoscroll the message window
    // to the bottom
    const messageWindow = this.messageWindow.current;
    messageWindow.scrollTop = messageWindow.scrollHeight - messageWindow.clientHeight;
  }
  render () {
    const { messages = [], username } = this.props;

    return (
      <div className='message-window' ref={this.messageWindow}>
        {messages.map((msg, i) => {
          return <Message key={i} text={msg.text} username={msg.username} self={username === msg.username} />
        })}
      </div>
    )
  }
}
