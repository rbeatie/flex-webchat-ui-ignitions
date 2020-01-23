import React from "react";
import StyledButton from "../styles/button.style";
import * as FlexWebChat from "@twilio/flex-webchat-ui";

const WebChatButton = () => {
  return (
    <StyledButton>
      <button
        key="main-header-=key"
        onClick={(evt) => {
          FlexWebChat.Actions.invokeAction('CallButton');
        }}
      >Trigger WebChat</button>
    </StyledButton>
  );
};

export default WebChatButton;
