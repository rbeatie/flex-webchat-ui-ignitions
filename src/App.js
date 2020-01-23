import React from 'react';
import WebChatButton from "./components/WebChatButton";
import * as FlexWebChat from "@twilio/flex-webchat-ui";

var appConfig = appConfig || window.appConfig || {};

class App extends React.Component {

  state = {
    manager: void 0
  };

  constructor(props) {
    super(props);
    this.webChatInitListener = this.webChatInitListener.bind(this);
  }

  componentDidMount() {
    if (!this.state.manager) {
      FlexWebChat.createWebChat(appConfig)
        .then(this.webChatInitListener)
        .catch(error => console.error(error));
    }
  }

  webChatInitListener(webChat) {
    const {manager} = webChat;

    this.setState({manager});
    FlexWebChat.Actions.registerAction('CallButton', () => {
      webChat.init();
    })
  }

  render() {
    const {manager} = this.props;

    if(!manager) {
      return (
        <WebChatButton />
      );
    }

    return (
      <FlexWebChat.ContextProvider
        manager={manager}
      >
        <div>
          <WebChatButton/>
          <FlexWebChat.MainContainer/>
        </div>
      </FlexWebChat.ContextProvider>
    );
  }
}

export default App;