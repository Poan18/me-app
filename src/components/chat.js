import React from 'react'

// We import all the components and functions that we defined previously
import MessageWindow from './messageWindow'
import TextBar from './textBar'
import { registerOnMessageCallback, send, startWebsocketConnection } from './websocket'

export class App extends React.Component {

  state = {
    messages: [],
    username: null
  }

  constructor (props) {
    super(props)

    registerOnMessageCallback(this.onMessageReceived.bind(this))
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
        <MessageWindow messages={this.state.messages} username={this.state.username} />
        <TextBar onSend={sendMessage} />
      </div>
    )
  }
}

export default App
