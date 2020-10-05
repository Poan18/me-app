import React from 'react'
import MessageWindow from './messageWindow'
import TextBar from './textBar'
import { registerOnMessageCallback, send, startWebsocketConnection, closeWs } from './websocket'

const axios = require('axios');

export class Chat extends React.Component {

  state = {
    messages: [],
    username: null,
    showHistory: false,
    messageHistory: []
  }

  constructor (props) {
    super(props)

    registerOnMessageCallback(this.onMessageReceived.bind(this))
  }

  componentWillUnmount() {
      closeWs();
  }

  onMessageReceived (msg) {

    msg = JSON.parse(msg)
    this.setState({
      messages: this.state.messages.concat(msg)
    })
  }

  setUserName (name) {
    startWebsocketConnection();

    var now = new Date().toLocaleString().replace(",","").replace(/:.. /," ");

    const message = {
      username: 'Ny användare',
      text: name + ' har gått med i chatten.',
      time: now
    }

    setTimeout(function(){ send(JSON.stringify(message)); }, 500);

    this.setState({
      username: name
    });
  }

  sendMessage (text) {
    var now = new Date().toLocaleString().replace(",","").replace(/:.. /," ");
    const message = {
      username: this.state.username,
      text: text,
      time: now
    }

    send(JSON.stringify(message));
  }

  showHistory () {
      axios.get(`http://localhost:1337/messageHistory`)
          .then((response) => {
              console.log(response.data);
              this.setState({ showHistory: !this.state.showHistory, messageHistory: response.data });
          })
          .catch((error) => {
              console.error(error);
          })
  }

  render () {
    // Create functions by binding the methods to the instance
    const setUserName = this.setUserName.bind(this)
    const sendMessage = this.sendMessage.bind(this)


    if (this.state.username === null) {
      return (
        <div className='container'>
          <div className='container-title'>Välj namn</div>
          <TextBar onSend={setUserName} />
        </div>
      )
    }

    return (
      <div className='container'>
        <div className='container-title'>Chatten</div>
        <div className='history-btn' onClick={this.showHistory.bind(this)}>Historik</div>
        {this.state.showHistory ? <MessageWindow messages={this.state.messageHistory} username={this.state.username} /> : [<MessageWindow messages={this.state.messages} username={this.state.username} />, <TextBar onSend={sendMessage} />]}
      </div>
    )
  }
}

export default Chat;
